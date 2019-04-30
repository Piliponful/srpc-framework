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
