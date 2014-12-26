var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthActionCreators = require('../../actions/AuthActionCreators');
var CredentialsAuthForm = require('./credentials/CredentialsAuthForm.react.js');



var Journal = React.createClass({

  render: function() {
    return (
      <div>
      SignIn
        <CredentialsAuthForm onSubmit={this.handleCredentialsSubmit} />
      </div>
    );
  }
});

module.exports = Journal;