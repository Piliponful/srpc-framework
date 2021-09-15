const createServer = require('./createServer')
const http = require('http')

module.exports = { createHttpServer: ({ ...args }) => createServer({ createServer: http.createServer, ...args }) }
