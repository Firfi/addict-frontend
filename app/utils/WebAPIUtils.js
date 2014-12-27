var SessionStore = require('../stores/SessionStore');
var $ = require('jquery');

var request = require('request').defaults({
  json: true
});

var AuthServerActionCreators = require('../actions/AuthServerActionCreators');

var root = location.protocol + '//' + location.host;
var apiUrl = root + '/api';

var makeUrl = function(url) {
  return apiUrl + "/" + url;
};

var mapCredentialsDomain = function(data) {
  return _.extend(data, {identifier: data.email});
};

var token;

SessionStore.addChangeListener(function() {
  token = SessionStore.getToken();
});

var post = function(url, data) {
  return $.ajax({
    url: url,
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json'
  })
};

module.exports = {

  credentialsAuth: function(data) {
    data = mapCredentialsDomain(data);
    post(makeUrl('authenticate/credentials'),  data).done(function(r) {
      AuthServerActionCreators.credentialsAuthBackend(null, r);
    }).fail(function(e) {
      AuthServerActionCreators.credentialsAuthBackend(e);
    });
  },

  credentialsSignUp: function(data) {
    data = mapCredentialsDomain(data);
    request.post({uri: makeUrl('signUp'), json: data}).on('response', function(r, b) {
      AuthServerActionCreators.credentialsSignUpBackend(null, b);
    }).on('error', function(e) {
      AuthServerActionCreators.credentialsSignUpBackend(e);
    });
  }

};