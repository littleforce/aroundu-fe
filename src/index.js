import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { LOGIN_STATE } from './actions';
import blogApp from './reducers.js';

let store = createStore(blogApp, {loginToken: LOGIN_STATE.IS_LOGOUT});
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
