
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var WebAPIUtils = require('../utils/WebAPIUtils');


module.exports = {

  credentialsAuth: function(data) {
    AppDispatcher.handleViewAction({
      actionType: AuthConstants.CREDENTIALS_AUTH
    });
    WebAPIUtils.credentialsAuth(data);
  },

  credentialsSignUp: function(data) {
    AppDispatcher.handleViewAction({
      actionType: AuthConstants.CREDENTIALS_SIGNUP
    });
    WebAPIUtils.credentialsSignUp(data);
  }

};
