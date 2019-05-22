<div style="text-align: center"><img src="srpc-logo.png" /></div>
<div style="text-align: center">
  <a href="https://github.com/standard/standard">
    <img alt="JavaScript Style Guide" src="https://cdn.rawgit.com/standard/standard/master/badge.svg" />
  </a>
</div>
<div style="text-align: center">
  <a href="https://nodei.co/npm/srpc-framework.png?downloads=true&downloadRank=true&stars=true">
    <img alt="Link to npm package" src="https://nodei.co/npm/srpc-framework.png?downloads=true&downloadRank=true&stars=true" />
  </a>
</div>

## Usage
```js
const {
  pureModules: {
    functionCaller: {
      createFunctionCaller
    }
  }, filthyModules: {
    SRPCServer: {
      createSRPCServer
    }
  }
} = require('../../')

const functions = { add: ({ a, b }) => a + b }

const port = 8080
const onStartText = `Server successfully launched on port ${port}`
createSRPCServer({ createFunctionCaller })({ functions, port, onStartText })

```

## Motivation
I like my tools to allow me to easily and eloquently lay down the project I envision. With the architecture I envision for it.
I feel right now like a prisoner of tools I have. I required to bend my architectural patterns for them.
I required to fit the protocol or vague specifications floation around it.
That's the exact motivation for me to make this framework.
I will build my projects only with this framework from now on and I think some people fealing the same way can use it too.
