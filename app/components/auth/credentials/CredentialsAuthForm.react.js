var React = require('react');
var _ = require('lodash');
var ReactPropTypes = React.PropTypes;
var Navigation = require('react-router').Navigation;
var CredentialsFormMixin = require('./mixins/CredentialsFormMixin.react.js');
var EmailInput = require('./EmailInput.react.js');
var PasswordInput = require('./PasswordInput.react.js');

var SessionStore = require('../../../stores/SessionStore');

var CredentialsAuthForm = React.createClass({

  mixins: [Navigation, CredentialsFormMixin],

  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  _onChange: function(r) {
    console.warn(r);
    // this.transitionTo('/');
  },



  propTypes: {
    onSubmit: ReactPropTypes.func.isRequired
  },

  getInitialState: function() {
    return {password: '', email: ''};
  },
  handleSubmit: function(e) {
    e.preventDefault();
    // TODO check if present and validation errors from inputs
    this.props.onSubmit(_.pick(this.state, ['email', 'password']));
  },
  render: function() {
    return (
      <form className="credentialsAuthForm" onSubmit={this.handleSubmit}>
        <EmailInput onChange={this.handleChangeOf("email")} />
        <PasswordInput onChange={this.handleChangeOf("password")} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CredentialsAuthForm;