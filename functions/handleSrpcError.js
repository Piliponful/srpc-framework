import colors from 'colors/safe'
import stringify from 'json-stringify-pretty-compact'

const handleSrpcError = async (params, srpc, srpcName) => {
  try {
    const result = await srpc(params)

    return result
  } catch (err) {
    const [, firstLine] = err.stack.split('\n')

    console.log(
      colors.red.underline('Error:'),
      colors.bgRed.white(err.message),
      '\n\n'
    )
    console.log(
      colors.red.underline('Details:'),
      colors.white('occurred in'),
      colors.bgRed.white(srpcName),
      colors.white(`at line ${firstLine.split(':')[1]}`),
      '\n\n'
    )
    console.log(
      colors.red.underline('Params:'),
      colors.yellow(stringify(params))
    )

    return {
      error: {
        code: -32001,
        message: 'Server Error'
      }
    }
  }
}

module.exports = { handleSrpcError }
