var Manatarms = require('./manatarms.js')
var objects = require('./objects');

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var globalSelector = new Manatarms.GlobalSelector;
  window.setInterval(function () {
    objects.draw();
    objects.move();
  }, 32);
};
