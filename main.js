const getRawBody = require('raw-body')
const http = require('http')

const defaultCallFunction = (functions, jsonString) => {
  const funcCallDescription = JSON.parse(jsonString)

  const funcToCall = functions[funcCallDescription.functionName]

  return funcToCall(funcCallDescription.functionArguments)
}

const createHttpSrpcServer = ({
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
    const result = await callFunction(functions, jsonString)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(result))
    res.end()
  })
    .listen(port, onStartFunc || (() => console.log(onStartText)))
}

module.exports = { createHttpSrpcServer, defaultCallFunction }
