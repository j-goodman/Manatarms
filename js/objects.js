objects = {
  list: [],
};

objects.at = function (index) {
  return this.list[index];
};

objects.add = function (newObject) {
  newObject.index = this.list.length
  this.list.push(newObject);
};

objects.draw = function () {
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].draw) {
      this.list[i].draw();
    }
  }
};

objects.move = function () {
  for (var i = 0; i < this.list.length; i++) {
    if (this.list[i].move) {
      this.list[i].move();
    }
  }
};

module.exports = objects;
