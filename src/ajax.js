import $ from 'jquery';
const URL = {
  base: 'http://localhost:80/api/'
};
const ajaxConfig = {
  login: {
    isPost: true,
    needToken: false,
    url: 'login'
  },
  register: {
    isPost: true,
    needToken: false,
    url: 'register'
  },
  createArticle: {
    isPost: true,
    needToken: false,
    url: 'article'
  }
}
function getDefaultSettings(
  config = {
    isPost: true,
    needToken: false
  }) {
  let settings = {};
  settings.async = true;
  settings.crossDomain = true;
  settings.headers = {
    'content-type': 'application/x-www-form-urlencoded'
  };
  settings.method = config.isPost ? 'POST' : 'GET';
  if (config.needToken) {
    let token = localStorage.getItem('arounduToken');
    settings.headers.Authorization = 'Bearer ' + token;
  }
  return settings;
}

function createArticleAjax(data, success, fail) {
  let settings = getDefaultSettings();
  settings.url = URL.base + URL.register;
  settings.data = data;
  $.ajax(settings).done(function (res) {
    success()
  }).fail(function () {
    fail();
  });
}
function checkToken() {
  let token = localStorage.getItem('arounduToken');
  return token === null ? false : token;
}
function sendAjax(type, data) {
  let config = ajaxConfig[type];
  let settings = getDefaultSettings(config);
  settings.url = URL.base + config.url;
  settings.data = data;
  return $.ajax(settings);
}
export {
  createArticleAjax,
  checkToken,
  sendAjax
};
