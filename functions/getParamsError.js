const getParamsError = () => {
  return {
    error: {
      code: -32602,
      message: 'Invalid params'
    }
  }
}

module.exports = { getParamsError }
