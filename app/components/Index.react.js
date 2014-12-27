var React = require('react');
var ReactPropTypes = React.PropTypes;
var AuthActionCreators = require('../actions/AuthActionCreators');
var SessionStore = require('../stores/SessionStore');

var p;

var Index = React.createClass({



  _onChange: function() {
    p =  SessionStore.getProfile();
  },

  componentWillMount: function() {
    //AuthActionCreators
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  render: function() {

    return (
      <div>
        <div>Index</div>
        <div>{p}</div>
      </div>
    );
  }
});

module.exports = Index;