var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthenticatedAwareComponentMixin = require('./auth/AuthenticatedAwareComponentMixin.react.js');
var AuthenticatedComponentMixin = require('./auth/AuthenticatedComponentMixin.react.js');
var Router = require('react-router');


var JournalBase = React.createClass({

  mixins: ['AuthenticatedComponentMixin'],

  componentDidMount: function() {
    var profile = this.state.session.profile;
    if (profile) {
      console.warn({user: profile.user.id})
      //this.transitionTo('/journal/f')
    } else {
      console.warn('we should not be here');
    }
  },

  render: function() {
    return (
      <div>
      Journal Base
      </div>
    );
  }
});

module.exports = JournalBase;