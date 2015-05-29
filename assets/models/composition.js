var BaseClass = require('base-class-extend');

var MyClass = BaseClass.extend({
  constructor: function MyClass(value) {
    this.value = value; // via setter
  },
  show: function show() {
    console.log(this.value); // via getter
  },
  // getter
  get value() { return this._value; },
  // setter
  set value(value) {
    if (value < 1 || value > 6)
      throw new RangeError('Out of range');
    this._value = value; },
});

module.exports = MyClass;
