/** @jsx React.DOM */

require('./utils/Utils');

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var SignIn = require('./components/auth/SignIn.react.js');
var SignUp = require('./components/auth/SignUp.react.js');
var Index = require('./components/Index.react.js');
var JournalBase = require('./components/JournalBase.react.js');
var Journal = require('./components/Journal.react.js');


var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="index">Index</Link></li>
            <li><Link to="signin">Sign In</Link></li>
            <li><Link to="signup">Sign Up</Link></li>
            <li><Link to="journal">My journal</Link></li>
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
    <Route name="journal" handler={JournalBase}>
      <Route name="user" path=":user"  handler={Journal} />
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});