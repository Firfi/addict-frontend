var React = require('react');
var Router = require('react-router');
var ReactPropTypes = React.PropTypes;
var SessionStore = require('../../stores/SessionStore.js');



var AuthenticatedAwareComponentMixin = {

  _sessionChangeListener: function() {
    this.setState(this._sessionState())
  },

  getInitialState: function() { return this._sessionState() },

  _sessionState: function() {
    return {
      session: {
        profile: SessionStore.getProfile()
      }
    }
  },

  componentWillMount: function() {
    SessionStore.addChangeListener(this._sessionChangeListener); // TODO https://github.com/jhudson8/react-events
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._sessionChangeListener);
  }


};

React.mixins.add('AuthenticatedAwareComponentMixin', AuthenticatedAwareComponentMixin);


module.exports = AuthenticatedAwareComponentMixin;