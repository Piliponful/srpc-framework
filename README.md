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
const { createFunctionCaller } = require('srpc-framework/pureModules/createFunctionCaller')
const { createHttpSrpcServer } = require('srpc-framework/impureModules/createSrpcServer')

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

## Srpc protocol specification
Data format: JSON;
Request format: `{ functionName: string, functionArguments: { [key: string]: any } }`
Response format: `{ errors: [string], value: any }`

## Http srpc protocol specification
Data format: JSON;
Http method: POST;
Example using curl: `curl -X POST -H "Content-Type: application/json" -d '{ "name": "add", "args": { a: 2, b: 2 } }' http://localhost:3000`

