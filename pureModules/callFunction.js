const callFunction = ({ input: { functions, jsonString } }) => {
  const funcCallDescription = JSON.parse(jsonString)

  const funcToCall = functions[funcCallDescription.name]

  return funcToCall(funcCallDescription.args)
}

module.exports = { callFunction }
