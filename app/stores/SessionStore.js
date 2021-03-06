var AppDispatcher = require('../dispatcher/AppDispatcher');
var AuthConstants = require('../constants/AuthConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AuthConstants;

var profile;

var CHANGE_EVENT = 'change';

var SessionStore = assign({}, EventEmitter.prototype, {

  getToken: function() {
    return (localStorage.getObject('auth') || {}).token;
  },

  getProfile: function() {
    return (localStorage.getObject('auth') || {}).profile;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

var handleAuthenticated = function(action) {
  var response = action.response;
  localStorage.setObject('auth', response);

  console.warn(response)
};

SessionStore.dispatchToken = AppDispatcher.register(function(payload) {


  var action = payload.action;

  switch(action.type) {

    case ActionTypes.CREDENTIALS_AUTH_BACKEND:
      handleAuthenticated(action);
      SessionStore.emitChange();

      break;

    case ActionTypes.CREDENTIALS_SIGNUP_BACKEND:
      handleAuthenticated(action);
      SessionStore.emitChange();

      break;

  }

});

module.exports = SessionStore;