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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reviewStars = __webpack_require__(21);

	var _reviewStars2 = _interopRequireDefault(_reviewStars);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReviewStars = (function (_Component) {
	    _inherits(ReviewStars, _Component);

	    function ReviewStars() {
	        _classCallCheck(this, ReviewStars);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReviewStars).apply(this, arguments));
	    }

	    _createClass(ReviewStars, [{
	        key: 'render',
	        value: function render() {
	            var width = parseInt(this.props.average * 2 * 10) + '%';
	            return _react2.default.createElement(
	                'div',
	                { className: 'stars-container' },
	                _react2.default.createElement(
	                    'svg',
	                    { version: '1.1', className: 'stars-background', x: '0px', y: '0px',
	                        viewBox: '0 0 65 13', 'enable-background': 'new 0 0 65 13' },
	                    _react2.default.createElement('polygon', { points: '6.501,0.082 8.036,5.016 13.002,5.016 8.984,8.065 10.519,13 6.501,9.95 2.483,13 4.018,8.065 0,5.016 4.966,5.016 ' }),
	                    _react2.default.createElement('polygon', { points: '19.503,0.082 21.038,5.016 26.004,5.016 21.986,8.065 23.521,13 19.503,9.95 15.485,13 17.02,8.065 13.002,5.016 17.968,5.016 ' }),
	                    _react2.default.createElement('polygon', { points: '32.505,0.082 34.039,5.016 39.006,5.016 34.988,8.065 36.523,13 32.505,9.95 28.487,13 30.022,8.065 26.004,5.016 30.97,5.016 ' }),
	                    _react2.default.createElement('polygon', { points: '45.507,0.082 47.041,5.016 52.008,5.016 47.99,8.065 49.525,13 45.507,9.95 41.488,13 43.023,8.065 39.006,5.016 43.973,5.016 ' }),
	                    _react2.default.createElement('polygon', { points: '58.509,0.082 60.043,5.016 65.01,5.016 60.992,8.065 62.527,13 58.509,9.95 54.49,13 56.025,8.065 52.008,5.016 56.975,5.016 ' })
	                ),
	                _react2.default.createElement(
	                    'svg',
	                    { version: '1.1', className: 'stars-foreground',
	                        viewBox: '0 0 65 13', 'aria-labelledby': 'title desc' },
	                    _react2.default.createElement(
	                        'defs',
	                        null,
	                        _react2.default.createElement(
	                            'clipPath',
	                            { id: 'clip-right' },
	                            _react2.default.createElement('rect', { x: '0', y: '0', width: width, height: '100%' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'title',
	                        null,
	                        'Review rating'
	                    ),
	                    _react2.default.createElement(
	                        'desc',
	                        null,
	                        'Rated at an average of ',
	                        this.props.average,
	                        ' stars'
	                    ),
	                    _react2.default.createElement(
	                        'g',
	                        { style: { clipPath: 'url(#clip-right)' } },
	                        _react2.default.createElement('polygon', { points: '6.501,0.082 8.036,5.016 13.002,5.016 8.984,8.065 10.519,13 6.501,9.95 2.483,13 4.018,8.065 0,5.016 4.966,5.016 ' }),
	                        _react2.default.createElement('polygon', { points: '19.503,0.082 21.038,5.016 26.004,5.016 21.986,8.065 23.521,13 19.503,9.95 15.485,13 17.02,8.065 13.002,5.016 17.968,5.016 ' }),
	                        _react2.default.createElement('polygon', { points: '32.505,0.082 34.039,5.016 39.006,5.016 34.988,8.065 36.523,13 32.505,9.95 28.487,13 30.022,8.065 26.004,5.016 30.97,5.016 ' }),
	                        _react2.default.createElement('polygon', { points: '45.507,0.082 47.041,5.016 52.008,5.016 47.99,8.065 49.525,13 45.507,9.95 41.488,13 43.023,8.065 39.006,5.016 43.973,5.016 ' }),
	                        _react2.default.createElement('polygon', { points: '58.509,0.082 60.043,5.016 65.01,5.016 60.992,8.065 62.527,13 58.509,9.95 54.49,13 56.025,8.065 52.008,5.016 56.975,5.016 ' })
	                    )
	                )
	            );
	        }
	    }]);

	    return ReviewStars;
	})(_react.Component);

	exports.default = ReviewStars;

/***/ },

/***/ 21:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });