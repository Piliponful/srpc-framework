const getRawBody = require('raw-body')

const { jsonRpcVersion } = require('../constants')

const callFunction = require('./defaultCallFunction')

const createServer = ({
  functions,
  paramsValidationFunctions,
  limit,
  createServer
}) => {
  createServer(async (req, res) => {
    const jsonString = await getRawBody(req, {
      length: req.headers['content-length'],
      limit,
      encoding: true
    })
    const result = await callFunction(functions, paramsValidationFunctions, jsonString)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ jsonrpc: jsonRpcVersion, ...result }))
    res.end()
  })
}

module.exports = createServer
