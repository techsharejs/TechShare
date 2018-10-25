import { combineReducers } from 'redux';
// import actions
import * as types from './types';

// set initial state
const initialState = {
  loginForm: {
    username: '',
    password: '',
  },
  isLogged: false,
};

// reducer
function changeForm(state = initialState, action) {
  switch (action.type) {
    case types.INPUT_CHAR:
      return Object.assign({}, state, {
        loginForm: action.payload,
      });
    case types.IS_LOGGED:
      return Object.assign({}, state, {
        isLogged: true,
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  changeForm,
});

export default reducer;
