module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OverstockLogo = (function (_Component) {
	    _inherits(OverstockLogo, _Component);

	    function OverstockLogo() {
	        _classCallCheck(this, OverstockLogo);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(OverstockLogo).apply(this, arguments));
	    }

	    _createClass(OverstockLogo, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                { x: "0", y: "0", width: "304.9", height: "52.8", viewBox: "0 0 304.9 52.8", "enable-background": "new 0 0 304.923 52.761" },
	                _react2.default.createElement("path", { d: "M74.7 17.3c-9.3 0-13.5 7.8-13.5 15.3 0 7.5 4.2 15.3 13.5 15.3 9.3 0 13.5-7.8 13.5-15.3 0-7.5-4.2-15.3-13.5-15.3L74.7 17.3zM74.7 43.7c-7 0-8.5-7.2-8.5-11.1 0-3.9 1.4-11.1 8.5-11.1s8.5 7.2 8.5 11.1c0 3.9-1.4 11.1-8.5 11.1L74.7 43.7zM103.1 41.8h-0.1l-7.6-23.7h-5.7l10.6 29.1h5.2l11.1-29.1h-5.3L103.1 41.8zM131.9 17.3c-9.6 0-14 7.2-14 16.2 0 8.4 4.8 14.6 13 14.6 4.7 0 6.6-1.1 7.9-2 3.7-2.4 5-6.6 5.2-8h-4.9c-0.2 2.2-2.9 5.7-7.5 5.7 -5.6 0-8.5-3.5-8.5-9.6h21.2c0-10.3-4.1-17-12.5-17L131.9 17.3zM123.2 30.3c0-4.5 3.6-8.7 8.1-8.7 5.9 0 7.8 4.2 8.1 8.7h-16.2H123.2zM154.8 22.9h-0.1v-4.8h-4.6v29.1h4.9V30.3c0-4.2 2.9-7.8 7.5-7.8h1.8v-5.1c-0.4-0.1-0.7-0.2-1.3-0.2C159.3 17.3 156.8 19.5 154.8 22.9L154.8 22.9zM181.7 30.7l-4.9-1.2c-3.8-0.9-5.3-1.5-5.3-3.9 0-3.6 4.3-4.1 5.8-4.1 6.2 0 6.8 3.1 6.9 4.9h4.7c0-1.4-0.7-9.1-11.1-9.1 -5.7 0-11 2.9-11 9.3 0 4 2.7 6.1 6.7 7.1l5.7 1.4c4.2 1.1 5.8 1.8 5.8 4.2 0 3.2-3.2 4.6-6.7 4.6 -6.9 0-7.6-3.7-7.7-5.9h-4.7c0.2 3.5 1 10.2 12.5 10.2 6.6 0 11.5-3.6 11.5-9.6 0-3.9-2.1-6.2-8.2-7.7L181.7 30.7zM201.5 10h-4.9v8.1h-3.9v4.1h3.9v19.2c0 3.5 1.1 6.2 5.9 6.2 0.5 0 1.9-0.2 3.7-0.4v-3.8h-1.7c-1 0-2.9 0-2.9-2.3V22.2h4.7V18.1h-4.7V10l0 0V10zM222.5 17.3c-9.3 0-13.5 7.8-13.5 15.3 0 7.5 4.2 15.3 13.5 15.3 9.3 0 13.5-7.8 13.5-15.3 0-7.5-4.2-15.3-13.5-15.3L222.5 17.3zM222.5 43.7c-7 0-8.5-7.2-8.5-11.1 0-3.9 1.4-11.1 8.5-11.1 7 0 8.5 7.2 8.5 11.1 0 3.9-1.4 11.1-8.4 11.1L222.5 43.7zM253.7 21.7c4.1 0 6.3 2.3 6.9 6.2h4.7c-0.4-5.1-3.3-10.6-10.9-10.6 -9.6 0-14 7.2-14 16.2 0 8.4 4.8 14.6 13 14.6 8.5 0 11.3-6.5 11.8-11.1h-4.7c-0.8 4.4-3.7 6.9-6.9 6.9 -6.7 0-8-6.2-8-11.2 0-5.2 1.9-11 8-11V21.7zM293.5 18.1h-6.2l-12.5 12.3V7.3h-4.7v39.9h4.7V36.2l4.1-3.7 9.1 14.7h6.3L282.4 28.9l11.1-10.8H293.5zM296.2 11v4.7h-0.9v-4.7h-1.7v-0.7h4.3v0.7H296.2L296.2 11zM304 15.7V11.2h0l-1.8 4.5h-0.6l-1.8-4.5h0v4.5h-0.9v-5.4h1.4l1.6 4.1 1.6-4.1h1.4v5.4h-0.9V15.7z" }),
	                _react2.default.createElement("path", { fill: "#C9202E", d: "M0 29.1V0h52.7v52.8H24.9c4.1-1.3 7.9-3.5 11.4-6.9 5.9-5.5 8.8-12.2 8.8-19.8 0-5.2-1.5-9.5-4.6-12.7 -3-3.3-7.1-4.9-12.1-4.9 -8 0-14.9 2.8-20.7 8.3C3.9 20.4 1.3 24.6 0 29.1zM6.1 33.2c0-6.4 1.7-11.7 5.1-15.8 3.5-4.2 7.8-6.4 12.8-6.4 4.1 0 7.4 1.7 10.1 5.2 2.7 3.4 4 7.8 4 13.2 0 6.3-1.7 11.5-5.1 15.8 -3.4 4.2-7.6 6.4-12.7 6.4 -4.1 0-7.6-1.7-10.2-5.2C7.4 42.9 6.1 38.5 6.1 33.2z" })
	            );
	        }
	    }]);

	    return OverstockLogo;
	})(_react.Component);

	exports.default = OverstockLogo;

/***/ }
/******/ ]);