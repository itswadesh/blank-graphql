export * from './app'

export * from './store'

export * from './auth'

export * from './db'

export * from './cache'

export * from './session'

export * from './logs'

import { IN_PROD } from './app'
export const APOLLO_OPTIONS = {
  playground: IN_PROD
    ? false
    : {
        settings: {
          'request.credentials': 'include',
        },
      },
}
