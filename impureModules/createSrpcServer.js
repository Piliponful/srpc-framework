const getRawBody = require('raw-body')
const http = require('http')

const createSrpcServer = ({
  port,
  onStartFunc,
  onStartText,
  functions,
  callFunction
}) => {
  http.createServer(async (req, res) => {
    const jsonString = await getRawBody(req, {
      length: req.headers['content-length'],
      limit: '1mb',
      encoding: true
    })
    const result = await callFunction({ input: { functions, jsonString } })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(result))
    res.end()
  })
    .listen(port, onStartFunc || (() => console.log(onStartText)))
}

module.exports = { createSrpcServer }
