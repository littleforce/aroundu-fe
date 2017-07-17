export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const LOGIN_STATE = {
  IS_LOGOUT: 'IS_LOGOUT'
}
export function toggleLogin(token) {
  if(typeof token === 'undefined') {
    token = 'token';
  }
  return {
    type: TOGGLE_LOGIN,
    token
  }
}
