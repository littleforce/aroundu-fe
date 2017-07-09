const URL = {
  base: 'http://xx.com/api/',
  login: 'login'
}
function getHeaders() {
  var headers = new Headers();
  headers.append('Accept', 'application/json');
  return headers;
}
function loginAjax(username, password) {
  let headers, data, url, req, body;
  headers = getHeaders();
  url = URL.base + URL.login;
  data = {username, password};
  body = new FormData();
  body.append('json', JSON.stringify(data));
  req = new Request(url, {method: 'POST', headers, body});
  fetch(req).then(function(response) {
    return response.json();
  }).then(function(json) {
    alert(json);
  });
}
export {
  loginAjax
};
