/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var SignIn = require('./components/auth/SignIn.react.js');
var SignUp = require('./components/auth/SignUp.react.js');
var Index = require('./components/Index.react.js');
require('./utils/Utils');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="index">Index</Link></li>
            <li><Link to="signin">Sign In</Link></li>
            <li><Link to="signup">Sign Up</Link></li>
            <li><Link to="diary">My diary</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;


var routes = (
  <Route handler={App} path="/">
    <Route name="signin" handler={SignIn} />
    <Route name="signup" handler={SignUp} />
    <Route name="index" handler={Index} />
    <Route name="journal" handler={Journal}
      <Route name="user" path=":user" handler={Journal} />
    />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});