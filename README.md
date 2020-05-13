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
const { createServer, createInvalidParamsError } = require('srpc-framework')

const { createServer } = require('http') // or https

const functions = { add: ({ a, b }) => a + b }
const paramsValidationFunctions = {
  add: (params) => {
    if (params instanceof Object !== true) {
      return false
    }

    return typeof params.a === number && typeof params.b === number
  }
}

const limit = '1mb'
const port = 8080
const onStartText = `Server successfully launched on port ${port}`

const { listen: startServer } = createServer({ functions, paramsValidationFunctions, limit, createServer })

startServer(port, onStartText)
```

## Overview
JSON-RPC over HTTP web 'framework'

## Specification
It adhere to [JSON-RPC 2.0](https://www.jsonrpc.org/specification)

Exceptions:
1. No id field - no point in it when over HTTP
2. No batch requests - if you need batch requests you wrote your back end poorly and need to refactor it
