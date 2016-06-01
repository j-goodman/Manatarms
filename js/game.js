var objects = require('./objects');

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  window.setInterval(function () {
    objects.draw();
    objects.move();
  }, 32);
};
