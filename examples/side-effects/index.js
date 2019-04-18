const { createFunctionCaller } = require('../')

const functions = { add: ({ a, b }) => a + b }

const server = require('http').createServer((req, res) => {
  const result = createFunctionCaller(functions)(req.body)
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(result));
  res.end();
})

server.listen(8080)
