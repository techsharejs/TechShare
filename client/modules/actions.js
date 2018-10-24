import * as types from './types';

export function inputChar(text) {
  const action = {
    type: types.INPUT_CHAR,
    payload: text,
  };
  return action;
}

export function isLogged() {
  return {
    type: types.IS_LOGGED,
  };
}
