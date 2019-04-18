// { handlers: { [functionName]: [functionBody] } }
// { jsonString: string }
const createFunctionCaller = ({ handlersObject }) => ({ jsonString }) => {
  try {
    // { name: string, args: { [argName]: [arg] }
    const funcCallDescription = JSON.parse(jsonString)
    const funcToCall = handlers[funcCallDescription.name]
    const funcResult = funcToCall(funcCallDescription.args)

    return funcResult
  } catch (e) {
    console.error(e)
  }
}

module.exports = { createFunctionCaller }
