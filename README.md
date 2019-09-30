<p align="center"><img src="srpc-logo.png" /></p>
<p align="center">
  <a href="https://github.com/standard/standard">
    <img alt="JavaScript Style Guide" src="https://cdn.rawgit.com/standard/standard/master/badge.svg" />
  </a>
</p>
<p align="center">
  <a href="https://nodei.co/npm/srpc-framework.png?downloads=true&downloadRank=true&stars=true">
    <img alt="Link to npm package" src="https://nodei.co/npm/srpc-framework.png?downloads=true&downloadRank=true&stars=true" />
  </a>
</p>

## Usage
```js
const { createFunctionCaller } = require('srpc-framework/functions/pure/createFunctionCaller')
const { createHttpSrpcServer } = require('srpc-framework/functions/impure/createHttpSrpcServer')

const functions = { add: ({ a, b }) => a + b }

const port = 8080
const onStartText = `Server successfully launched on port ${port}`

createHttpSrpcServer({ functions, port, onStartText })
```

## Motivation
Web framework that will let you write the code as you envision it. Won't limit you. Won't stand in your way.

Without a need to adjust your though process to it. Without a room for REST. Simplified to it's bare bones.

Ready to acknowledge and embrace today's action-based web apps.

Seamless client->server integration.

## srpc Protocol Specification
<p align="center">Data format: JSON;</p>
<p align="center">Request format: `{ functionName: string, functionArguments: { [key: string]: any } }`;</p>
<p align="center">Response format: `{ errors: [string], value: any }`;</p>

## http-srpc Protocol Specification
<p align="center">Http method: POST;</p>
<p align="center">Http body: JSON object following srpc request format;</p>
<p align="center">Http response: JSON object following srpc response format;</p>
<p align="center">Example using curl: `curl -X POST -H "Content-Type: application/json" -d '{ "name": "add", "args": { a: 2, b: 2 } }' http://localhost:3000`;</p>
