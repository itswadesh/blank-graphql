export const {
  NODE_ENV = 'development',

  APP_PORT = 3000,
  APP_HOSTNAME = 'localhost',
  APP_PROTOCOL = 'http',
  APP_ORIGIN = `${APP_PROTOCOL}://${APP_HOSTNAME}:${APP_PORT}`,
  APP_SECRET = '123',
} = process.env

export const IN_PROD = false // NODE_ENV === 'production'

export const MCQ_ORIGIN = 'https://lrnr.in'
