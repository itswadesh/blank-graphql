import express, { RequestHandler, NextFunction } from 'express'
import session from 'express-session'
import passport from 'passport'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import schemaDirectives from './directives'
import {
  SESSION_OPTIONS,
  APOLLO_OPTIONS,
  STATIC_PATH,
  SEED_DATABASE,
  SENTRY_DNS,
} from './config'
import { Request, Response } from './types'
// import { seed } from './seed'
// const Sentry = require('@sentry/node');

export const createApp = (store?: session.Store) => {
  const app = express()

  // The request handler must be the first middleware on the app
  // Sentry.init({ dsn: SENTRY_DNS });
  // app.use(Sentry.Handlers.requestHandler());

  const sessionHandler = session({ ...SESSION_OPTIONS, store })

  // Setup Passport
  app.use(sessionHandler)
  app.use(passport.initialize())
  app.use(passport.session())

  app.use(express.static(STATIC_PATH))

  // The error handler must be before any other error middleware and after all controllers
  // app.use(Sentry.Handlers.errorHandler());

  const server = new ApolloServer({
    ...APOLLO_OPTIONS,
    typeDefs,
    resolvers,
    schemaDirectives,
    context: ({ req, res, connection }) =>
      connection ? connection.context : { req, res },
    subscriptions: {
      onConnect: async (connectionParams, webSocket, { request }) => {
        // if (SEED_DATABASE) seed() // Seed database with some sample data if it config says so
        const req = await new Promise((resolve) => {
          sessionHandler(request as Request, {} as Response, () => {
            // Directives are ignored in WS; need to auth explicitly
            // ensureSignedIn(request as Request)

            resolve(request)
          })
        })

        return { req }
      },
    },
  })

  server.applyMiddleware({ app, cors: false })

  return { app, server }
}
