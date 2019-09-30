const callFunction = ({ input: { functions, jsonString } }) => {
  const funcCallDescription = JSON.parse(jsonString)

  const funcToCall = functions[funcCallDescription.functionName]

  return funcToCall(funcCallDescription.functionArguments)
}

module.exports = { callFunction }
