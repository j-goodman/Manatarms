var Manatarms = require('./manatarms.js');

var Unit = function (x, y) {
  this.pos = {
    x: x,
    y: y
  };
  this.makeSelectable();
}

Unit.initialize = Manatarms.initialize;

module.exports = Unit;
