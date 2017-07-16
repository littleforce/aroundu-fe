import $ from 'jquery';
const URL = {
  base: 'http://localhost:80/api/',
  login: 'login',
  register: 'register'
};
function getDefaultSettings() {
  let settings = {};
  settings.async = true;
  settings.crossDomain = true;
  settings.headers = {
    'content-type': 'application/x-www-form-urlencoded'
  };
  return settings;
}
function loginAjax({email, password}) {
  let settings = getDefaultSettings();
  settings.url = URL.base + URL.login;
  settings.data = {
    email,
    password
  };
  settings.method = 'POST';
  $.ajax(settings).done(function (response) {
    console.log(response.token);
  }).fail(function (res) {

  });
}
function registerAjax({name, email, password, password_confirmation}, cb) {
  let settings = getDefaultSettings();
  settings.url = URL.base + URL.register;
  settings.data = {
    name,
    email,
    password,
    password_confirmation
  };
  settings.method = 'POST';
  $.ajax(settings).done(function (res) {
    if (res.error == 0) {
      cb();
    }
  });
}
export {
  loginAjax,
  registerAjax
};
