React = require('react');
require('react-mixin-manager')(React);
var Router = require('react-router');

React.mixins.add('Navigation', Router.Navigation);
React.mixins.add('State', Router.State);

