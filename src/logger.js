const winston = require('winston')
const path = require('path')

module.exports = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({
      name: 'info-log',
      filename: path.resolve(process.cwd(), 'logs/log-info.log'),
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-log',
      filename: path.resolve(process.cwd(), 'logs/log-error.log'),
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'warn-log',
      filename: path.resolve(process.cwd(), 'logs/log-warn.log'),
      level: 'warn'
    })
  ]
})
