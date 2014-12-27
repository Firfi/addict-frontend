var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthenticatedAwareComponentMixin = require('./auth/AuthenticatedAwareComponentMixin.react.js');
var Router = require('react-router');
var Navigation = Router.Navigation;


var Journal = React.createClass({

  mixins: ['AuthenticatedAwareComponentMixin'],

  render: function() {
    return (
      <div>
      Journal of {this.state.session.profile}
      </div>
    );
  }
});

module.exports = Journal;