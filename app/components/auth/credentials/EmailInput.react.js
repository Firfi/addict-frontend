var React = require('react');
var ReactPropTypes = React.PropTypes;

var EmailInput = React.createClass({

  propTypes: {
    onChange: ReactPropTypes.func.isRequired
  },

  handleChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return (
      <input type="text" placeholder="Email" ref="identifier" onChange={this.handleChange} />
    );
  }
});

module.exports = EmailInput;