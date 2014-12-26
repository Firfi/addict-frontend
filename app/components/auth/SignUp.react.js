var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthActionCreators = require('../../actions/AuthActionCreators');
var CredentialsSignUpForm = require('./credentials/CredentialsSignUpForm.react.js');


var SignUp = React.createClass({

  handleCredentialsSignUp: function(data) {
    AuthActionCreators.credentialsSignUp(data);
  },

  render: function() {
    return (
      <div>
        SignUp
        <CredentialsSignUpForm onSubmit={this.handleCredentialsSignUp} />
      </div>
    );
  }
});

module.exports = SignUp;