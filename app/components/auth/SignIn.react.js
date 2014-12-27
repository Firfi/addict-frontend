var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthActionCreators = require('../../actions/AuthActionCreators');
var CredentialsAuthForm = require('./credentials/CredentialsAuthForm.react.js');
var SessionStore = require('../../stores/SessionStore');
var AuthenticatedAwareComponentMixin = require('./AuthenticatedAwareComponentMixin.react.js');



var SignIn = React.createClass({

  mixins: ['AuthenticatedAwareComponentMixin', 'Navigation'],

  _onChange: function() {
    if (this.state.session.profile) this.transitionTo('/journal');
  },

  handleCredentialsSubmit: function(data) {
    AuthActionCreators.credentialsAuth(data);
  },

  render: function() {
    return (
      <div>
        SignIn
        <CredentialsAuthForm onSubmit={this.handleCredentialsSubmit} />
      </div>
    );
  },

  componentWillMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  }



});

module.exports = SignIn;