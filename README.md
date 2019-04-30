[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/YOUR-MODULE-NAME)

## SRPC Web Framework
This is a next generation web framework based on a Simplified RPC protocol which will give a flexability that modern web apps need

## Install
`$ npm i srpc-framework`

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

## Notes
- Descriptiveness over least possible LOC
- Distinct folder structure than any other module
- FP inspired
- The framework is in it's infancy, I will use it for all of my projects and add features as I need them
- Very small wrapper around raw http module

## Features
- **Reasoning about the app, it's architecture is much more streigh forward and easier with this framework**
- Folder structure design to make distinction between functions with side-effects and without
- Testing will become very ease
- if you keep the intended folder structure and will separate side-effects testing will become a dream come true
- Will allow for new, very modular/component architecture finally comming to backend. No more OOP concepts, no more MVC, no more controllers
- Functions will become much more reusable
... etc.


## Motivation
Let's start of with what I don't like the most in general modern day web app backend. It's 99% written with RESTful design.
I hate REST. I think it should be dead and no one should ever touch it. For web app backend at least. Please.

If you don't understand why, you can read my article on medium here.

So... The good, the best, the only fit for high level protocol is RPC. But I don't want on this stage to implement full RPC spec.

### Simplified RPC
So here we are with Simplified RPC that operates on HTTP, information is encoded in json and contains only "functionName" field
and "args" object. That's it.

