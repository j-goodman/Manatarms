/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var objects = __webpack_require__(1);
	
	window.onload = function () {
	  var canvas = document.getElementById("canvas");
	  var ctx = canvas.getContext("2d");
	  window.setInterval(function () {
	    objects.draw();
	    objects.move();
	  }, 32);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map