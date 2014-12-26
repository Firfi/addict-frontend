var _ = require('lodash');

_.mixin({ 'capitalize': function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} });

// make lodash global
window._ = _;

// local storage helper methods
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};