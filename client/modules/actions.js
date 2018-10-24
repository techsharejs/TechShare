import INPUT_CHAR from './types'

function inputChar(text) {
    const action = {
      type: INPUT_CHAR,
      payload: text
    }
    return action;
  }

export default inputChar;