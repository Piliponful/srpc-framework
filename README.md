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
const { createServer as createSrpcServer, callFunction } = require('srpc-framework')

const { createServer } = require('http') // or https

const functions = { add: ({ a, b }) => a + b }

const port = 8080
const onStartText = `Server successfully launched on port ${port}`

const handleErrors = result => {
  if (result.error) {
    console.log(error)

    return 'Internal Server Error'
  }

  return result
}

const { listen: startServer } = createServer({ functions, createServer, callFunction: compose(callFunction, handleErrors) })

startServer(port, onStartText)
```
