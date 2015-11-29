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

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuButton = (function (_Component) {
	    _inherits(MenuButton, _Component);

	    function MenuButton() {
	        _classCallCheck(this, MenuButton);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuButton).apply(this, arguments));
	    }

	    _createClass(MenuButton, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'menu-button' },
	                _react2.default.createElement(
	                    'svg',
	                    { onClick: this.handleTap, x: '0px', y: '0px', width: '32px', height: '32px', viewBox: '0 0 32 32', 'enable-background': 'new 0 0 32 32' },
	                    _react2.default.createElement('path', { fill: '#444444', d: 'M3.375,3.875h25.25c1.125,0,2.062,0.938,2.062,2.063s-0.938,2-2.062,2H3.375c-1.125,0-2.063-0.875-2.063-2 S2.25,3.875,3.375,3.875z M3.375,13.938h25.25c1.125,0,2.062,0.938,2.062,2.063s-0.938,2.063-2.062,2.063H3.375 c-1.125,0-2.063-0.938-2.063-2.063S2.25,13.938,3.375,13.938z M3.375,24.062h25.25c1.125,0,2.062,0.875,2.062,2 s-0.938,2.063-2.062,2.063H3.375c-1.125,0-2.063-0.938-2.063-2.063S2.25,24.062,3.375,24.062z' })
	                )
	            );
	        }
	    }, {
	        key: 'handleTap',
	        value: function handleTap() {
	            console.log('menu button tap');
	        }
	    }]);

	    return MenuButton;
	})(_react.Component);

	exports.default = MenuButton;

/***/ }
/******/ ]);