var SessionStore = require('../stores/SessionStore');

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

module.exports = {

  credentialsAuth: function(data) {
    data = mapCredentialsDomain(data);
    request.post({uri: makeUrl('authenticate/credentials'), json: data}).on('response', function(r) {
      AuthServerActionCreators.credentialsAuthBackend(null, r);
    }).on('error', function(e) {
      AuthServerActionCreators.credentialsSignUpBackend(e);
    });
  },

  credentialsSignUp: function(data) {
    data = mapCredentialsDomain(data);
    request.post({uri: makeUrl('signUp'), json: data}).on('response', function(r) {
      AuthServerActionCreators.credentialsSignUpBackend(null, r);
    }).on('error', function(e) {
      AuthServerActionCreators.credentialsSignUpBackend(e);
    });
  }

};