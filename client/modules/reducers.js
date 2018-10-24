// import actions
import INPUT_CHAR from './types';
import { combineReducers } from 'redux';

// set initial state
const initialState = {
  loginForm: {
    username: '',
    password: ''
  }
}

// reducer
function changeForm(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHAR:
      console.log('JEFF IS LAME, CHANGING CHAR', state)
      return Object.assign({}, state, {
        loginForm: action.payload
      })
    default:
      return state;
  }
}

const reducer = combineReducers({
  changeForm
})

export default reducer;