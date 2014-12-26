var React = require('react');
var ReactPropTypes = React.PropTypes;

var NameInput = React.createClass({

  propTypes: {
    onChange: ReactPropTypes.func.isRequired
  },

  handleChange: function(e) {
    this.props.onChange(e.target.value);
  },

  render: function() {
    return (
      <input type="text" placeholder="Name" ref="name" onChange={this.handleChange} />
    );
  }
});

module.exports = NameInput;