import { createLogger, transports, format } from 'winston'

const { combine, timestamp } = format

export const logger = createLogger({
  format: combine(timestamp(), format.json()),
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/combined.log' }),
    new transports.Console()
  ]
})
