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
const { createHttpSrpcServer, defaultCallFunction } = require('srpc-framework')

const functions = { add: ({ a, b }) => a + b }

const port = 8080
const onStartText = `Server successfully launched on port ${port}`

createHttpSrpcServer({ port, onStartText, functions, callFunction: defaultCallFunction })
```

## Motivation
Web framework that will let you write the code as you envision it. Won't limit you. Won't stand in your way.

Without a need to adjust your though process to it. Without a room for REST. Simplified to it's bare bones.

Ready to acknowledge and embrace today's action-based web apps.

Seamless client->server integration.

## Srpc Protocol Specification
To adhere to srpc specification and to ensure the interoperability between
different implementations of this framework you need to follow only 2 simple steps:

1. To make remote procedural call to server use JSON as data format
2. This JSON should have following structure: `{ functionName: string, functionArguments: { [key: string]: any } }`
3. You should put this JSON in HTTP request body

That's all
