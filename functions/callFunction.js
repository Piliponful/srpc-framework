const to = func => {
  try {
    return [null, func()]
  } catch (e) {
    return [e, null]
  }
}

const callFunction = async (functions, paramsValidationFunctions, jsonString) => {
  const [err, funcCallDescription] = to(() => JSON.parse(jsonString))

  if (err) {
    return {
      error: {
        code: -32700,
        message: 'Parse error'
      }
    }
  }

  const methodIsValid = typeof funcCallDescription.method === 'string' && funcCallDescription.method.length > 0

  if (!methodIsValid) {
    return {
      error: {
        code: -32600,
        message: 'invalid request'
      }
    }
  }

  const funcToCall = functions[funcCallDescription.method]

  if (!funcToCall) {
    return {
      error: {
        code: -32601,
        message: 'Method not found'
      }
    }
  }

  const isParamsValid = paramsValidationFunctions[funcCallDescription.method]

  if (!isParamsValid) {
    return {
      error: {
        code: -32000,
        message: 'Server error',
        data: {
          additionalMessage: 'No params validation function'
        }
      }
    }
  }

  const paramsIsValid = isParamsValid(funcCallDescription.params)

  if (!paramsIsValid) {
    return {
      error: {
        code: -32602,
        message: 'Invalid params'
      }
    }
  }

  try {
    const result = await funcToCall(funcCallDescription.params)

    return result
  } catch (err) {
    console.log(`Error ${err} occurred in function ${funcCallDescription.method}`)
    return {
      error: {
        code: -32001,
        message: 'Server Error'
      }
    }
  }
}

module.exports = callFunction
