const callFunction = ({ input: { functions, jsonString } }) => {
  const funcCallDescription = JSON.parse(jsonString)

  const funcToCall = functions[funcCallDescription.name]
  const funcResult = funcToCall(funcCallDescription.args)

  return funcResult
}

module.exports = { callFunction }
