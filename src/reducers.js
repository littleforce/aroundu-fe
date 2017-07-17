import { combineReducers } from 'redux';
import { TOGGLE_LOGIN, LOGIN_STATE } from './actions';
const { IS_LOGOUT } = LOGIN_STATE;

function loginToken(state = IS_LOGOUT, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      if (state === IS_LOGOUT) {
        return action.token;
      } else {
        return IS_LOGOUT;
      }
    default:
      return state;
  }
}

const blogApp = combineReducers({
  loginToken
})

export default blogApp;
