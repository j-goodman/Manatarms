var Manatarms = {};

Manatarms.makeSelectable = function () {
  this.selected = false;
  this.select = function () {
    this.selected = true;
  };
  this.deselect = function () {
    this.selected = false;
  }
};

Manatarms.GlobalSelector = function () {
  var canvas = document.getElementById("canvas");
  canvas.onclick = function () {
    console.log("SELECT");
    Manatarms.initializeSelector();
  }
}

Manatarms.initializeSelector = function (x, y) {
  this.origin = {
    x: x,
    y: y
  };
  this.cursor = {
    x: e.pageX,
    y: e.pageY
  }
};

module.exports = Manatarms;
