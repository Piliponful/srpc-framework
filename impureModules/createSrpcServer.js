const getRawBody = require('raw-body')
const http = require('http')

const createSrpcServer = ({
  port,
  onStartText,
  onStartFunc,
  functions,
  createFunctionCaller
}) => {
  http.createServer(async (req, res) => {
    const jsonString = await getRawBody(req, {
      length: req.headers['content-length'],
      limit: '1mb',
      encoding: true
    })
    const functionCaller = createFunctionCaller({ functions })
    const result = functionCaller({ jsonString })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(result))
    res.end()
  })
    .listen(port, onStartFunc || (() => console.log(onStartText)))
}

module.exports = { createSrpcServer }
