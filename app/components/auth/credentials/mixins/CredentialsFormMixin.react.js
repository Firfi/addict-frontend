var _ = require('lodash');

var CredentialsFormMixin = {
  handleChangeOf: function(field) {
    var fun = this['handle' + _.capitalize(field) + 'Change'];
    var that = this;
    if (fun) return fun;
    else return function(v) {
      that.state[field] = v;
    }
  }
};

module.exports = CredentialsFormMixin;