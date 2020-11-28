import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import connectRedis from 'connect-redis'
import session from 'express-session'
import Redis from 'ioredis'
import http from 'http'
import { createApp } from './app'
import { MONGO_URI, MONGO_OPTIONS, REDIS_OPTIONS, APP_PORT } from './config'
//
;(async () => {
  try {
    mongoose.set('useFindAndModify', false)
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    const RedisStore = connectRedis(session)

    const store = new RedisStore({
      client: new Redis(REDIS_OPTIONS),
    })

    const { app, server } = createApp(store)

    const httpServer = http.createServer(app)
    server.installSubscriptionHandlers(httpServer)

    httpServer.listen(APP_PORT, () => {
      console.log(`http://localhost:${APP_PORT}${server.graphqlPath}`)
      console.log(`ws://localhost:${APP_PORT}${server.subscriptionsPath}`)
    })
  } catch (e) {
    console.error(e)
  }
})()
