const createServer = require('./createServer')
const https = require('https')

module.exports = { createHttpsServer: ({ ...args }) => createServer({ createServer: https.createServer, ...args }) }
