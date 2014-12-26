var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthActionCreators = require('../../actions/AuthActionCreators');
var CredentialsAuthForm = require('./credentials/CredentialsAuthForm.react.js');



var SignIn = React.createClass({

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
  }
});

module.exports = SignIn;