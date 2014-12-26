var React = require('react');
var ReactPropTypes = React.PropTypes;
var Navigation = require('react-router').Navigation;
var _ = require('lodash');
var CredentialsFormMixin = require('./mixins/CredentialsFormMixin.react.js');
var EmailInput = require('./EmailInput.react.js');
var PasswordInput = require('./PasswordInput.react.js');
var NameInput = require('./NameInput.react.js');

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
    // this.transitionTo('/signin');
  },

  propTypes: {
    onSubmit: ReactPropTypes.func.isRequired
  },

  getInitialState: function() {
    return {login: '', name: '', password: ''};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    // TODO check if present and validation errors from inputs
    this.props.onSubmit(_.pick(this.state, ['email', 'password', 'name']));
  },

  render: function() {
    return (
      <form className="credentialsSignUpForm" onSubmit={this.handleSubmit}>
        <EmailInput onChange={this.handleChangeOf("email")} />
        <PasswordInput onChange={this.handleChangeOf("password")} />
        <NameInput onChange={this.handleChangeOf("name")} />
        <input type="submit" value="Post" />
      </form>
    );
  }
});



module.exports = CredentialsAuthForm;