var React = require('react');


var AuthenticatedComponentMixin = { // self: AuthenticatedAwareComponentMixin =>
  _assertSession: function() {
    if (!this.state.session.profile) {
      this.transitionTo('signin', {}, {returnPath: this.getPathname()});
    }
  },
  componentWillUpdate: function() {
    this._assertSession();
  },
  componentWillMount: function() {
    this._assertSession();
  }
};

React.mixins.add('AuthenticatedComponentMixin', AuthenticatedComponentMixin,
  'AuthenticatedAwareComponentMixin',
  'Navigation', 'State');

module.exports = AuthenticatedComponentMixin;