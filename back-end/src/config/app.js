import 'dotenv/config'

export const env = {
  port: process.env.PORT || 8081,
  host: process.env.HOST || 'localhost',
}
