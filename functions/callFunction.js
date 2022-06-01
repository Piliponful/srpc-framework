const to = func => {
  try {
    return [null, func()]
  } catch (e) {
    return [e, null]
  }
}

const callFunction = async (functions, jsonString) => {
  const [err, funcCallDescription] = to(() => JSON.parse(jsonString))

  if (err) {
    return {
      error: {
        message: 'Error parsing JSON'
      }
    }
  }

  const methodIsValid = typeof funcCallDescription.method === 'string' && funcCallDescription.method.length > 0

  if (!methodIsValid) {
    return {
      error: {
        message: 'Method name is invalid'
      }
    }
  }

  const funcToCall = functions[funcCallDescription.method]

  if (!funcToCall) {
    return {
      error: {
        message: 'Method not found'
      }
    }
  }

  return funcToCall(funcCallDescription.params)
}

module.exports = { callFunction }
