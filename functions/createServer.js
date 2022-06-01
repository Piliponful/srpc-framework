const getRawBody = require('raw-body')
const contentType = require('content-type')

const { defaultCallFunction } = require('./callFunction')

const createServer = ({
  functions,
  createServer,
  callFunction = defaultCallFunction
}) => {
  return createServer(async (req, res) => {
    const jsonString = await getRawBody(req, {
      length: req.headers['content-length'],
      limit: '1mb',
      encoding: contentType.parse(req).parameters.charset
    })

    const result = await callFunction(functions, jsonString)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify({ ...result }))
    res.end()
  })
}

module.exports = createServer
