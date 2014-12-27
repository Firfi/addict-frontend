var _ = require('lodash');

require('./GeneralMixins');

_.mixin({ 'capitalize': function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
} });

// make lodash global
window._ = _;

_.mixin({
  'inherit': function(child, base, props) {
    child.prototype = _.create(base.prototype, _.assign({
      '_super': base.prototype,
      'constructor': child
    }, props));
    return child;
  }
});

// local storage helper methods
Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};