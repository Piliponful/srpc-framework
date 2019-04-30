// { functions: { [functionName]: [functionBody] } }
// { jsonString: string }
const createFunctionCaller = ({ functions }) => ({ jsonString }) => {
  // { name: string, args: { [argName]: [arg] }
  const funcCallDescription = JSON.parse(jsonString)
  const funcToCall = functions[funcCallDescription.name]
  const funcResult = funcToCall(funcCallDescription.args)

  return funcResult
}

module.exports = { createFunctionCaller }
