var React = require('react');
var ReactPropTypes = React.PropTypes;

var PasswordInput = React.createClass({

  propTypes: {
    onChange: ReactPropTypes.func.isRequired
  },

  handleChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return (
      <input type="password" placeholder="Password" ref="password" onChange={this.handleChange} />
    );
  }
});

module.exports = PasswordInput;