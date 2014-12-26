
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');

// we have it in different module because of circled dependency with API utils

var handleCredentialsAction = function(typ, errTyp) {
  return function(error, response) {
    if (error) {
      AppDispatcher.handleServerAction({
        actionType: errTyp,
        error: error
      });
    } else {
      AppDispatcher.handleServerAction({
        actionType: typ,
        response: response
      });
    }
  };
};

module.exports = {

  credentialsAuthBackend: handleCredentialsAction(AuthConstants.CREDENTIALS_AUTH_BACKEND,
    AuthConstants.CREDENTIALS_AUTH_BACKEND_ERROR),

  credentialsSignUpBackend: handleCredentialsAction(AuthConstants.CREDENTIALS_SIGNUP_BACKEND,
    AuthConstants.CREDENTIALS_SIGNUP_BACKEND_ERROR)

};
