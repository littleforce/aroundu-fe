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
function loginAjax(
  {email, password},
  {success, fail}
) {
  let settings = getDefaultSettings();
  settings.url = URL.base + URL.login;
  settings.data = {
    email,
    password
  };
  settings.method = 'POST';
  $.ajax(settings).done(function (response) {
    success(response.token);
  }).fail(function (res) {
    fail();
  });
}
function registerAjax
(
  {name, email, password, password_confirmation},
  {success, fail}
) {
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
    if (res.error === 0) {
      success();
    } else {
      fail();
    }
  }).fail(function () {
    fail();
  });
}
export {
  loginAjax,
  registerAjax
};
