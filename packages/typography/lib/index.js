(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require('react'));
	else if (typeof define === 'function' && define.amd)
		define(['react'], factory);
	else if (typeof exports === 'object')
		exports['xyz-ui-typography'] = factory(require('react'));
	else root['xyz-ui-typography'] = factory(root['React']);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
	return /******/ (function(modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/ var installedModules = {}; // The require function
		/******/
		/******/ /******/ function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/ if (installedModules[moduleId]) {
				/******/ return installedModules[moduleId].exports;
				/******/
			} // Create a new module (and put it into the cache)
			/******/ /******/ var module = (installedModules[moduleId] = {
				/******/ i: moduleId,
				/******/ l: false,
				/******/ exports: {},
				/******/
			}); // Execute the module function
			/******/
			/******/ /******/ modules[moduleId].call(
				module.exports,
				module,
				module.exports,
				__webpack_require__
			); // Flag the module as loaded
			/******/
			/******/ /******/ module.l = true; // Return the exports of the module
			/******/
			/******/ /******/ return module.exports;
			/******/
		} // expose the modules object (__webpack_modules__)
		/******/
		/******/
		/******/ /******/ __webpack_require__.m = modules; // expose the module cache
		/******/
		/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
		/******/
		/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
			/******/ if (!__webpack_require__.o(exports, name)) {
				/******/ Object.defineProperty(exports, name, {
					enumerable: true,
					get: getter,
				});
				/******/
			}
			/******/
		}; // define __esModule on exports
		/******/
		/******/ /******/ __webpack_require__.r = function(exports) {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: 'Module',
				});
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
		/******/
		/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
			value,
			mode
		) {
			/******/ if (mode & 1) value = __webpack_require__(value);
			/******/ if (mode & 8) return value;
			/******/ if (
				mode & 4 &&
				typeof value === 'object' &&
				value &&
				value.__esModule
			)
				return value;
			/******/ var ns = Object.create(null);
			/******/ __webpack_require__.r(ns);
			/******/ Object.defineProperty(ns, 'default', {
				enumerable: true,
				value: value,
			});
			/******/ if (mode & 2 && typeof value != 'string')
				for (var key in value)
					__webpack_require__.d(
						ns,
						key,
						function(key) {
							return value[key];
						}.bind(null, key)
					);
			/******/ return ns;
			/******/
		}; // getDefaultExport function for compatibility with non-harmony modules
		/******/
		/******/ /******/ __webpack_require__.n = function(module) {
			/******/ var getter =
				module && module.__esModule
					? /******/ function getDefault() {
							return module['default'];
					  }
					: /******/ function getModuleExports() {
							return module;
					  };
			/******/ __webpack_require__.d(getter, 'a', getter);
			/******/ return getter;
			/******/
		}; // Object.prototype.hasOwnProperty.call
		/******/
		/******/ /******/ __webpack_require__.o = function(object, property) {
			return Object.prototype.hasOwnProperty.call(object, property);
		}; // __webpack_public_path__
		/******/
		/******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
		/******/
		/******/
		/******/ /******/ return __webpack_require__(
			(__webpack_require__.s = './packages/typography/index.tsx')
		);
		/******/
	})(
		/************************************************************************/
		/******/ {
			/***/ './node_modules/react-hot-loader/dist/react-hot-loader.production.min.js':
				/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict';
					eval(
						'function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "react")),classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},AppContainer=function(t){function e(){return classCallCheck(this,e),possibleConstructorReturn(this,t.apply(this,arguments))}return inherits(e,t),e.prototype.render=function(){return React.Children.only(this.props.children)},e}(React.Component),hot_prod=function(){return function(t){return t}},areComponentsEqual=function(t,e){return t===e},setConfig=function(){},cold=function(t){return t};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold;\n\n\n//# sourceURL=webpack://xyz-ui-typography/./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js?'
					);

					/***/
				},

			/***/ './node_modules/react-hot-loader/index.js':
				/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					'use strict';
					eval(
						'\n\nvar evalAllowed = false;\ntry {\n  eval(\'evalAllowed = true\');\n} catch (e) {\n  // eval not allowed due to CSP\n}\n\n// RHL needs setPrototypeOf to operate Component inheritance, and eval to patch methods\nvar platformSupported = !!Object.setPrototypeOf && evalAllowed;\n\nif (true) {\n  if (false) {}\n  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");\n} else {}\n\n\n//# sourceURL=webpack://xyz-ui-typography/./node_modules/react-hot-loader/index.js?'
					);

					/***/
				},

			/***/ './node_modules/webpack/buildin/global.js':
				/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
				/*! no static exports found */
				/***/ function(module, exports) {
					eval(
						'var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function("return this")() || (1, eval)("this");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://xyz-ui-typography/(webpack)/buildin/global.js?'
					);

					/***/
				},

			/***/ './node_modules/webpack/buildin/harmony-module.js':
				/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
				/*! no static exports found */
				/***/ function(module, exports) {
					eval(
						'module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, "loaded", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "id", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, "exports", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://xyz-ui-typography/(webpack)/buildin/harmony-module.js?'
					);

					/***/
				},

			/***/ './packages/typography/index.tsx':
				/*!***************************************!*\
  !*** ./packages/typography/index.tsx ***!
  \***************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						'__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./packages/typography/node_modules/classnames/index.js");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style */ "./packages/typography/styles/style.ts");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __rest = undefined && undefined.__rest || function (s, e) {\n  var t = {};\n\n  for (var p in s) {\n    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n  }\n\n  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];\n  }\n  return t;\n};\n\n // import * as PropTypes from \'prop-types\';\n\n\n // 首字母大写\n\nfunction capitalize(str) {\n  return str.charAt(0).toUpperCase() + str.slice(1);\n}\n\nvar Typography = function Typography(_a) {\n  var children = _a.children,\n      Component = _a.component,\n      size = _a.size,\n      align = _a.align,\n      noWarp = _a.noWarp,\n      other = __rest(_a, ["children", "component", "size", "align", "noWarp"]);\n\n  var _b;\n\n  var typographyStyles = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_style__WEBPACK_IMPORTED_MODULE_2__["typographyStyle"].typographyFont, (_b = {}, _b[_styles_style__WEBPACK_IMPORTED_MODULE_2__["typographyStyle"]["size" + capitalize(size)]] = size !== \'\', _b[_styles_style__WEBPACK_IMPORTED_MODULE_2__["typographyStyle"]["tx" + capitalize(align)]] = align !== \'inherit\', _b[_styles_style__WEBPACK_IMPORTED_MODULE_2__["typographyStyle"].noWarp] = noWarp, _b));\n  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, _extends({\n    className: typographyStyles\n  }, other), children);\n};\n\nTypography.defaultProps = {\n  component: \'p\',\n  size: \'\',\n  align: \'inherit\'\n};\nvar _default = Typography;\n/* harmony default export */ __webpack_exports__["default"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__rest, "__rest", "/Users/xuzihao/project/xyzUI/packages/typography/index.tsx");\n  reactHotLoader.register(capitalize, "capitalize", "/Users/xuzihao/project/xyzUI/packages/typography/index.tsx");\n  reactHotLoader.register(Typography, "Typography", "/Users/xuzihao/project/xyzUI/packages/typography/index.tsx");\n  reactHotLoader.register(_default, "default", "/Users/xuzihao/project/xyzUI/packages/typography/index.tsx");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/index.tsx?'
					);

					/***/
				},

			/***/ './packages/typography/node_modules/@emotion/hash/dist/hash.esm.js':
				/*!*************************************************************************!*\
  !*** ./packages/typography/node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*************************************************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						'__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js\nfunction murmurhash2_32_gc(str) {\n  var l = str.length,\n      h = l ^ l,\n      i = 0,\n      k;\n\n  while (l >= 4) {\n    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;\n    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n    k ^= k >>> 24;\n    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;\n    l -= 4;\n    ++i;\n  }\n\n  switch (l) {\n    case 3:\n      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;\n\n    case 2:\n      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;\n\n    case 1:\n      h ^= str.charCodeAt(i) & 0xff;\n      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n  }\n\n  h ^= h >>> 13;\n  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n  h ^= h >>> 15;\n  return (h >>> 0).toString(36);\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/@emotion/hash/dist/hash.esm.js?'
					);

					/***/
				},

			/***/ './packages/typography/node_modules/@emotion/memoize/dist/memoize.esm.js':
				/*!*******************************************************************************!*\
  !*** ./packages/typography/node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \*******************************************************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						'__webpack_require__.r(__webpack_exports__);\nfunction memoize(fn) {\n  var cache = {};\n  return function (arg) {\n    if (cache[arg] === undefined) cache[arg] = fn(arg);\n    return cache[arg];\n  };\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (memoize);\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/@emotion/memoize/dist/memoize.esm.js?'
					);

					/***/
				},

			/***/ './packages/typography/node_modules/@emotion/stylis/dist/stylis.esm.js':
				/*!*****************************************************************************!*\
  !*** ./packages/typography/node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*****************************************************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						"__webpack_require__.r(__webpack_exports__);\nfunction stylis_min (W) {\n  function M(d, c, e, h, a) {\n    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {\n      g = e.charCodeAt(l);\n      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);\n\n      if (0 === b + n + v + m) {\n        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {\n          switch (g) {\n            case 32:\n            case 9:\n            case 59:\n            case 13:\n            case 10:\n              break;\n\n            default:\n              f += e.charAt(l);\n          }\n\n          g = 59;\n        }\n\n        switch (g) {\n          case 123:\n            f = f.trim();\n            q = f.charCodeAt(0);\n            k = 1;\n\n            for (t = ++l; l < B;) {\n              switch (g = e.charCodeAt(l)) {\n                case 123:\n                  k++;\n                  break;\n\n                case 125:\n                  k--;\n                  break;\n\n                case 47:\n                  switch (g = e.charCodeAt(l + 1)) {\n                    case 42:\n                    case 47:\n                      a: {\n                        for (u = l + 1; u < J; ++u) {\n                          switch (e.charCodeAt(u)) {\n                            case 47:\n                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {\n                                l = u + 1;\n                                break a;\n                              }\n\n                              break;\n\n                            case 10:\n                              if (47 === g) {\n                                l = u + 1;\n                                break a;\n                              }\n\n                          }\n                        }\n\n                        l = u;\n                      }\n\n                  }\n\n                  break;\n\n                case 91:\n                  g++;\n\n                case 40:\n                  g++;\n\n                case 34:\n                case 39:\n                  for (; l++ < J && e.charCodeAt(l) !== g;) {\n                  }\n\n              }\n\n              if (0 === k) break;\n              l++;\n            }\n\n            k = e.substring(t, l);\n            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));\n\n            switch (q) {\n              case 64:\n                0 < r && (f = f.replace(N, ''));\n                g = f.charCodeAt(1);\n\n                switch (g) {\n                  case 100:\n                  case 109:\n                  case 115:\n                  case 45:\n                    r = c;\n                    break;\n\n                  default:\n                    r = O;\n                }\n\n                k = M(c, r, k, g, a + 1);\n                t = k.length;\n                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));\n                if (0 < t) switch (g) {\n                  case 115:\n                    f = f.replace(da, ea);\n\n                  case 100:\n                  case 109:\n                  case 45:\n                    k = f + '{' + k + '}';\n                    break;\n\n                  case 107:\n                    f = f.replace(fa, '$1 $2');\n                    k = f + '{' + k + '}';\n                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;\n                    break;\n\n                  default:\n                    k = f + k, 112 === h && (k = (p += k, ''));\n                } else k = '';\n                break;\n\n              default:\n                k = M(c, X(c, f, I), k, h, a + 1);\n            }\n\n            F += k;\n            k = I = r = u = q = 0;\n            f = '';\n            g = e.charCodeAt(++l);\n            break;\n\n          case 125:\n          case 59:\n            f = (0 < r ? f.replace(N, '') : f).trim();\n            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\\x00\\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {\n              case 0:\n                break;\n\n              case 64:\n                if (105 === g || 99 === g) {\n                  G += f + e.charAt(l);\n                  break;\n                }\n\n              default:\n                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));\n            }\n            I = r = u = q = 0;\n            f = '';\n            g = e.charCodeAt(++l);\n        }\n      }\n\n      switch (g) {\n        case 13:\n        case 10:\n          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\\x00');\n          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);\n          z = 1;\n          D++;\n          break;\n\n        case 59:\n        case 125:\n          if (0 === b + n + v + m) {\n            z++;\n            break;\n          }\n\n        default:\n          z++;\n          y = e.charAt(l);\n\n          switch (g) {\n            case 9:\n            case 32:\n              if (0 === n + m + b) switch (x) {\n                case 44:\n                case 58:\n                case 9:\n                case 32:\n                  y = '';\n                  break;\n\n                default:\n                  32 !== g && (y = ' ');\n              }\n              break;\n\n            case 0:\n              y = '\\\\0';\n              break;\n\n            case 12:\n              y = '\\\\f';\n              break;\n\n            case 11:\n              y = '\\\\v';\n              break;\n\n            case 38:\n              0 === n + b + m && (r = I = 1, y = '\\f' + y);\n              break;\n\n            case 108:\n              if (0 === n + b + m + E && 0 < u) switch (l - u) {\n                case 2:\n                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);\n\n                case 8:\n                  111 === K && (E = K);\n              }\n              break;\n\n            case 58:\n              0 === n + b + m && (u = l);\n              break;\n\n            case 44:\n              0 === b + v + n + m && (r = 1, y += '\\r');\n              break;\n\n            case 34:\n            case 39:\n              0 === b && (n = n === g ? 0 : 0 === n ? g : n);\n              break;\n\n            case 91:\n              0 === n + b + v && m++;\n              break;\n\n            case 93:\n              0 === n + b + v && m--;\n              break;\n\n            case 41:\n              0 === n + b + m && v--;\n              break;\n\n            case 40:\n              if (0 === n + b + m) {\n                if (0 === q) switch (2 * x + 3 * K) {\n                  case 533:\n                    break;\n\n                  default:\n                    q = 1;\n                }\n                v++;\n              }\n\n              break;\n\n            case 64:\n              0 === b + v + n + m + u + k && (k = 1);\n              break;\n\n            case 42:\n            case 47:\n              if (!(0 < n + m + v)) switch (b) {\n                case 0:\n                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {\n                    case 235:\n                      b = 47;\n                      break;\n\n                    case 220:\n                      t = l, b = 42;\n                  }\n\n                  break;\n\n                case 42:\n                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);\n              }\n          }\n\n          0 === b && (f += y);\n      }\n\n      K = x;\n      x = g;\n      l++;\n    }\n\n    t = p.length;\n\n    if (0 < t) {\n      r = c;\n      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;\n      p = r.join(',') + '{' + p + '}';\n\n      if (0 !== w * E) {\n        2 !== w || L(p, 2) || (E = 0);\n\n        switch (E) {\n          case 111:\n            p = p.replace(ha, ':-moz-$1') + p;\n            break;\n\n          case 112:\n            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;\n        }\n\n        E = 0;\n      }\n    }\n\n    return G + p + F;\n  }\n\n  function X(d, c, e) {\n    var h = c.trim().split(ia);\n    c = h;\n    var a = h.length,\n        m = d.length;\n\n    switch (m) {\n      case 0:\n      case 1:\n        var b = 0;\n\n        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {\n          c[b] = Z(d, c[b], e, m).trim();\n        }\n\n        break;\n\n      default:\n        var v = b = 0;\n\n        for (c = []; b < a; ++b) {\n          for (var n = 0; n < m; ++n) {\n            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();\n          }\n        }\n\n    }\n\n    return c;\n  }\n\n  function Z(d, c, e) {\n    var h = c.charCodeAt(0);\n    33 > h && (h = (c = c.trim()).charCodeAt(0));\n\n    switch (h) {\n      case 38:\n        return c.replace(F, '$1' + d.trim());\n\n      case 58:\n        return d.trim() + c.replace(F, '$1' + d.trim());\n\n      default:\n        if (0 < 1 * e && 0 < c.indexOf('\\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());\n    }\n\n    return d + c;\n  }\n\n  function P(d, c, e, h) {\n    var a = d + ';',\n        m = 2 * c + 3 * e + 4 * h;\n\n    if (944 === m) {\n      d = a.indexOf(':', 9) + 1;\n      var b = a.substring(d, a.length - 1).trim();\n      b = a.substring(0, d).trim() + b + ';';\n      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;\n    }\n\n    if (0 === w || 2 === w && !L(a, 1)) return a;\n\n    switch (m) {\n      case 1015:\n        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;\n\n      case 951:\n        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;\n\n      case 963:\n        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;\n\n      case 1009:\n        if (100 !== a.charCodeAt(4)) break;\n\n      case 969:\n      case 942:\n        return '-webkit-' + a + a;\n\n      case 978:\n        return '-webkit-' + a + '-moz-' + a + a;\n\n      case 1019:\n      case 983:\n        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;\n\n      case 883:\n        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;\n        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;\n        break;\n\n      case 932:\n        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {\n          case 103:\n            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;\n\n          case 115:\n            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;\n\n          case 98:\n            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;\n        }\n        return '-webkit-' + a + '-ms-' + a + a;\n\n      case 964:\n        return '-webkit-' + a + '-ms-flex-' + a + a;\n\n      case 1023:\n        if (99 !== a.charCodeAt(8)) break;\n        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');\n        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;\n\n      case 1005:\n        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;\n\n      case 1e3:\n        b = a.substring(13).trim();\n        c = b.indexOf('-') + 1;\n\n        switch (b.charCodeAt(0) + b.charCodeAt(c)) {\n          case 226:\n            b = a.replace(G, 'tb');\n            break;\n\n          case 232:\n            b = a.replace(G, 'tb-rl');\n            break;\n\n          case 220:\n            b = a.replace(G, 'lr');\n            break;\n\n          default:\n            return a;\n        }\n\n        return '-webkit-' + a + '-ms-' + b + a;\n\n      case 1017:\n        if (-1 === a.indexOf('sticky', 9)) break;\n\n      case 975:\n        c = (a = d).length - 10;\n        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();\n\n        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {\n          case 203:\n            if (111 > b.charCodeAt(8)) break;\n\n          case 115:\n            a = a.replace(b, '-webkit-' + b) + ';' + a;\n            break;\n\n          case 207:\n          case 102:\n            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;\n        }\n\n        return a + ';';\n\n      case 938:\n        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {\n          case 105:\n            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;\n\n          case 115:\n            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;\n\n          default:\n            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;\n        }\n        break;\n\n      case 973:\n      case 989:\n        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;\n\n      case 931:\n      case 953:\n        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;\n        break;\n\n      case 962:\n        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;\n    }\n\n    return a;\n  }\n\n  function L(d, c) {\n    var e = d.indexOf(1 === c ? ':' : '{'),\n        h = d.substring(0, 3 !== c ? e : 10);\n    e = d.substring(e + 1, d.length - 1);\n    return R(2 !== c ? h : h.replace(na, '$1'), e, c);\n  }\n\n  function ea(d, c) {\n    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));\n    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';\n  }\n\n  function H(d, c, e, h, a, m, b, v, n, q) {\n    for (var g = 0, x = c, w; g < A; ++g) {\n      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {\n        case void 0:\n        case !1:\n        case !0:\n        case null:\n          break;\n\n        default:\n          x = w;\n      }\n    }\n\n    if (x !== c) return x;\n  }\n\n  function T(d) {\n    switch (d) {\n      case void 0:\n      case null:\n        A = S.length = 0;\n        break;\n\n      default:\n        switch (d.constructor) {\n          case Array:\n            for (var c = 0, e = d.length; c < e; ++c) {\n              T(d[c]);\n            }\n\n            break;\n\n          case Function:\n            S[A++] = d;\n            break;\n\n          case Boolean:\n            Y = !!d | 0;\n        }\n\n    }\n\n    return T;\n  }\n\n  function U(d) {\n    d = d.prefix;\n    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);\n    return U;\n  }\n\n  function B(d, c) {\n    var e = d;\n    33 > e.charCodeAt(0) && (e = e.trim());\n    V = e;\n    e = [V];\n\n    if (0 < A) {\n      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);\n      void 0 !== h && 'string' === typeof h && (c = h);\n    }\n\n    var a = M(O, e, c, 0, 0);\n    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));\n    V = '';\n    E = 0;\n    z = D = 1;\n    return a;\n  }\n\n  var ca = /^\\0+/g,\n      N = /[\\0\\r\\f]/g,\n      aa = /: */g,\n      ka = /zoo|gra/,\n      ma = /([,: ])(transform)/g,\n      ia = /,\\r+?/g,\n      F = /([\\t\\r\\n ])*\\f?&/g,\n      fa = /@(k\\w+)\\s*(\\S*)\\s*/,\n      Q = /::(place)/g,\n      ha = /:(read-only)/g,\n      G = /[svh]\\w+-[tblr]{2}/,\n      da = /\\(\\s*(.*)\\s*\\)/g,\n      oa = /([\\s\\S]*?);/g,\n      ba = /-self|flex-/g,\n      na = /[^]*?(:[rp][el]a[\\w-]+)[^]*/,\n      la = /stretch|:\\s*\\w+\\-(?:conte|avail)/,\n      ja = /([^-])(image-set\\()/,\n      z = 1,\n      D = 1,\n      E = 0,\n      w = 1,\n      O = [],\n      S = [],\n      A = 0,\n      R = null,\n      Y = 0,\n      V = '';\n  B.use = T;\n  B.set = U;\n  void 0 !== W && U(W);\n  return B;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stylis_min);\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/@emotion/stylis/dist/stylis.esm.js?"
					);

					/***/
				},

			/***/ './packages/typography/node_modules/@emotion/unitless/dist/unitless.esm.js':
				/*!*********************************************************************************!*\
  !*** ./packages/typography/node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*********************************************************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						'__webpack_require__.r(__webpack_exports__);\nvar unitlessKeys = {\n  animationIterationCount: 1,\n  borderImageOutset: 1,\n  borderImageSlice: 1,\n  borderImageWidth: 1,\n  boxFlex: 1,\n  boxFlexGroup: 1,\n  boxOrdinalGroup: 1,\n  columnCount: 1,\n  columns: 1,\n  flex: 1,\n  flexGrow: 1,\n  flexPositive: 1,\n  flexShrink: 1,\n  flexNegative: 1,\n  flexOrder: 1,\n  gridRow: 1,\n  gridRowEnd: 1,\n  gridRowSpan: 1,\n  gridRowStart: 1,\n  gridColumn: 1,\n  gridColumnEnd: 1,\n  gridColumnSpan: 1,\n  gridColumnStart: 1,\n  fontWeight: 1,\n  lineHeight: 1,\n  opacity: 1,\n  order: 1,\n  orphans: 1,\n  tabSize: 1,\n  widows: 1,\n  zIndex: 1,\n  zoom: 1,\n  WebkitLineClamp: 1,\n  // SVG-related properties\n  fillOpacity: 1,\n  floodOpacity: 1,\n  stopOpacity: 1,\n  strokeDasharray: 1,\n  strokeDashoffset: 1,\n  strokeMiterlimit: 1,\n  strokeOpacity: 1,\n  strokeWidth: 1\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/@emotion/unitless/dist/unitless.esm.js?'
					);

					/***/
				},

			/***/ './packages/typography/node_modules/classnames/index.js':
				/*!**************************************************************!*\
  !*** ./packages/typography/node_modules/classnames/index.js ***!
  \**************************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					eval(
						"var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/classnames/index.js?"
					);

					/***/
				},

			/***/ './packages/typography/node_modules/create-emotion/dist/index.esm.js':
				/*!***************************************************************************!*\
  !*** ./packages/typography/node_modules/create-emotion/dist/index.esm.js ***!
  \***************************************************************************/
				/*! exports provided: default */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						"__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ \"./packages/typography/node_modules/@emotion/memoize/dist/memoize.esm.js\");\n/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ \"./packages/typography/node_modules/@emotion/unitless/dist/unitless.esm.js\");\n/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ \"./packages/typography/node_modules/@emotion/hash/dist/hash.esm.js\");\n/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ \"./packages/typography/node_modules/@emotion/stylis/dist/stylis.esm.js\");\n/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ \"./packages/typography/node_modules/stylis-rule-sheet/index.js\");\n/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar hyphenateRegex = /[A-Z]|^ms/g;\nvar processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function (styleName) {\n  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();\n});\nvar processStyleValue = function processStyleValue(key, value) {\n  if (value == null || typeof value === 'boolean') {\n    return '';\n  }\n\n  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__[\"default\"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties\n  !isNaN(value) && value !== 0) {\n    return value + 'px';\n  }\n\n  return value;\n};\n\nif (true) {\n  var contentValuePattern = /(attr|calc|counters?|url)\\(/;\n  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];\n  var oldProcessStyleValue = processStyleValue;\n\n  processStyleValue = function processStyleValue(key, value) {\n    if (key === 'content') {\n      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '\"' && value.charAt(0) !== \"'\")) {\n        console.error(\"You seem to be using a value for 'content' without quotes, try replacing it with `content: '\\\"\" + value + \"\\\"'`\");\n      }\n    }\n\n    return oldProcessStyleValue(key, value);\n  };\n}\n\nvar classnames = function classnames(args) {\n  var len = args.length;\n  var i = 0;\n  var cls = '';\n\n  for (; i < len; i++) {\n    var arg = args[i];\n    if (arg == null) continue;\n    var toAdd = void 0;\n\n    switch (typeof arg) {\n      case 'boolean':\n        break;\n\n      case 'function':\n        if (true) {\n          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\\n' + 'Please call the function before passing it to cx.');\n        }\n\n        toAdd = classnames([arg()]);\n        break;\n\n      case 'object':\n        {\n          if (Array.isArray(arg)) {\n            toAdd = classnames(arg);\n          } else {\n            toAdd = '';\n\n            for (var k in arg) {\n              if (arg[k] && k) {\n                toAdd && (toAdd += ' ');\n                toAdd += k;\n              }\n            }\n          }\n\n          break;\n        }\n\n      default:\n        {\n          toAdd = arg;\n        }\n    }\n\n    if (toAdd) {\n      cls && (cls += ' ');\n      cls += toAdd;\n    }\n  }\n\n  return cls;\n};\nvar isBrowser = typeof document !== 'undefined';\n\n/*\n\nhigh performance StyleSheet for css-in-js systems\n\n- uses multiple style tags behind the scenes for millions of rules\n- uses `insertRule` for appending in production for *much* faster performance\n- 'polyfills' on server side\n\n// usage\n\nimport StyleSheet from 'glamor/lib/sheet'\nlet styleSheet = new StyleSheet()\n\nstyleSheet.inject()\n- 'injects' the stylesheet into the page (or into memory if on server)\n\nstyleSheet.insert('#box { border: 1px solid red; }')\n- appends a css rule into the stylesheet\n\nstyleSheet.flush()\n- empties the stylesheet of all its contents\n\n*/\n// $FlowFixMe\nfunction sheetForTag(tag) {\n  if (tag.sheet) {\n    // $FlowFixMe\n    return tag.sheet;\n  } // this weirdness brought to you by firefox\n\n\n  for (var i = 0; i < document.styleSheets.length; i++) {\n    if (document.styleSheets[i].ownerNode === tag) {\n      // $FlowFixMe\n      return document.styleSheets[i];\n    }\n  }\n}\n\nfunction makeStyleTag(opts) {\n  var tag = document.createElement('style');\n  tag.setAttribute('data-emotion', opts.key || '');\n\n  if (opts.nonce !== undefined) {\n    tag.setAttribute('nonce', opts.nonce);\n  }\n\n  tag.appendChild(document.createTextNode('')) // $FlowFixMe\n  ;\n  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);\n  return tag;\n}\n\nvar StyleSheet =\n/*#__PURE__*/\nfunction () {\n  function StyleSheet(options) {\n    this.isSpeedy = \"development\" === 'production'; // the big drawback here is that the css won't be editable in devtools\n\n    this.tags = [];\n    this.ctr = 0;\n    this.opts = options;\n  }\n\n  var _proto = StyleSheet.prototype;\n\n  _proto.inject = function inject() {\n    if (this.injected) {\n      throw new Error('already injected!');\n    }\n\n    this.tags[0] = makeStyleTag(this.opts);\n    this.injected = true;\n  };\n\n  _proto.speedy = function speedy(bool) {\n    if (this.ctr !== 0) {\n      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})\n      throw new Error(\"cannot change speedy now\");\n    }\n\n    this.isSpeedy = !!bool;\n  };\n\n  _proto.insert = function insert(rule, sourceMap) {\n    // this is the ultrafast version, works across browsers\n    if (this.isSpeedy) {\n      var tag = this.tags[this.tags.length - 1];\n      var sheet = sheetForTag(tag);\n\n      try {\n        sheet.insertRule(rule, sheet.cssRules.length);\n      } catch (e) {\n        if (true) {\n          console.warn('illegal rule', rule); // eslint-disable-line no-console\n        }\n      }\n    } else {\n      var _tag = makeStyleTag(this.opts);\n\n      this.tags.push(_tag);\n\n      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));\n    }\n\n    this.ctr++;\n\n    if (this.ctr % 65000 === 0) {\n      this.tags.push(makeStyleTag(this.opts));\n    }\n  };\n\n  _proto.flush = function flush() {\n    // $FlowFixMe\n    this.tags.forEach(function (tag) {\n      return tag.parentNode.removeChild(tag);\n    });\n    this.tags = [];\n    this.ctr = 0; // todo - look for remnants in document.styleSheets\n\n    this.injected = false;\n  };\n\n  return StyleSheet;\n}();\n\nfunction createEmotion(context, options) {\n  if (context.__SECRET_EMOTION__ !== undefined) {\n    return context.__SECRET_EMOTION__;\n  }\n\n  if (options === undefined) options = {};\n  var key = options.key || 'css';\n\n  if (true) {\n    if (/[^a-z-]/.test(key)) {\n      throw new Error(\"Emotion key must only contain lower case alphabetical characters and - but \\\"\" + key + \"\\\" was passed\");\n    }\n  }\n\n  var current;\n\n  function insertRule(rule) {\n    current += rule;\n\n    if (isBrowser) {\n      sheet.insert(rule, currentSourceMap);\n    }\n  }\n\n  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);\n  var stylisOptions;\n\n  if (options.prefix !== undefined) {\n    stylisOptions = {\n      prefix: options.prefix\n    };\n  }\n\n  var caches = {\n    registered: {},\n    inserted: {},\n    nonce: options.nonce,\n    key: key\n  };\n  var sheet = new StyleSheet(options);\n\n  if (isBrowser) {\n    // 🚀\n    sheet.inject();\n  }\n\n  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__[\"default\"](stylisOptions);\n  stylis.use(options.stylisPlugins)(insertionPlugin);\n  var currentSourceMap = '';\n\n  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {\n    if (interpolation == null) {\n      return '';\n    }\n\n    switch (typeof interpolation) {\n      case 'boolean':\n        return '';\n\n      case 'function':\n        if (interpolation.__emotion_styles !== undefined) {\n          var selector = interpolation.toString();\n\n          if (selector === 'NO_COMPONENT_SELECTOR' && \"development\" !== 'production') {\n            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');\n          }\n\n          return selector;\n        }\n\n        if (this === undefined && \"development\" !== 'production') {\n          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\\n' + 'It can be called directly with props or interpolated in a styled call like this\\n' + \"let SomeComponent = styled('div')`${dynamicStyle}`\");\n        }\n\n        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe\n        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);\n\n      case 'object':\n        return createStringFromObject.call(this, interpolation);\n\n      default:\n        var cached = caches.registered[interpolation];\n        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;\n    }\n  }\n\n  var objectToStringCache = new WeakMap();\n\n  function createStringFromObject(obj) {\n    if (objectToStringCache.has(obj)) {\n      // $FlowFixMe\n      return objectToStringCache.get(obj);\n    }\n\n    var string = '';\n\n    if (Array.isArray(obj)) {\n      obj.forEach(function (interpolation) {\n        string += handleInterpolation.call(this, interpolation, false);\n      }, this);\n    } else {\n      Object.keys(obj).forEach(function (key) {\n        if (typeof obj[key] !== 'object') {\n          if (caches.registered[obj[key]] !== undefined) {\n            string += key + \"{\" + caches.registered[obj[key]] + \"}\";\n          } else {\n            string += processStyleName(key) + \":\" + processStyleValue(key, obj[key]) + \";\";\n          }\n        } else {\n          if (key === 'NO_COMPONENT_SELECTOR' && \"development\" !== 'production') {\n            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');\n          }\n\n          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {\n            obj[key].forEach(function (value) {\n              string += processStyleName(key) + \":\" + processStyleValue(key, value) + \";\";\n            });\n          } else {\n            string += key + \"{\" + handleInterpolation.call(this, obj[key], false) + \"}\";\n          }\n        }\n      }, this);\n    }\n\n    objectToStringCache.set(obj, string);\n    return string;\n  }\n\n  var name;\n  var stylesWithLabel;\n  var labelPattern = /label:\\s*([^\\s;\\n{]+)\\s*;/g;\n\n  var createClassName = function createClassName(styles, identifierName) {\n    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(styles + identifierName) + identifierName;\n  };\n\n  if (true) {\n    var oldCreateClassName = createClassName;\n    var sourceMappingUrlPattern = /\\/\\*#\\ssourceMappingURL=data:application\\/json;\\S+\\s+\\*\\//g;\n\n    createClassName = function createClassName(styles, identifierName) {\n      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {\n        currentSourceMap = sourceMap;\n        return '';\n      }), identifierName);\n    };\n  }\n\n  var createStyles = function createStyles(strings) {\n    var stringMode = true;\n    var styles = '';\n    var identifierName = '';\n\n    if (strings == null || strings.raw === undefined) {\n      stringMode = false;\n      styles += handleInterpolation.call(this, strings, false);\n    } else {\n      styles += strings[0];\n    }\n\n    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      interpolations[_key - 1] = arguments[_key];\n    }\n\n    interpolations.forEach(function (interpolation, i) {\n      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .\n      );\n\n      if (stringMode === true && strings[i + 1] !== undefined) {\n        styles += strings[i + 1];\n      }\n    }, this);\n    stylesWithLabel = styles;\n    styles = styles.replace(labelPattern, function (match, p1) {\n      identifierName += \"-\" + p1;\n      return '';\n    });\n    name = createClassName(styles, identifierName);\n    return styles;\n  };\n\n  if (true) {\n    var oldStylis = stylis;\n\n    stylis = function stylis(selector, styles) {\n      oldStylis(selector, styles);\n      currentSourceMap = '';\n    };\n  }\n\n  function insert(scope, styles) {\n    if (caches.inserted[name] === undefined) {\n      current = '';\n      stylis(scope, styles);\n      caches.inserted[name] = current;\n    }\n  }\n\n  var css = function css() {\n    var styles = createStyles.apply(this, arguments);\n    var selector = key + \"-\" + name;\n\n    if (caches.registered[selector] === undefined) {\n      caches.registered[selector] = stylesWithLabel;\n    }\n\n    insert(\".\" + selector, styles);\n    return selector;\n  };\n\n  var keyframes = function keyframes() {\n    var styles = createStyles.apply(this, arguments);\n    var animation = \"animation-\" + name;\n    insert('', \"@keyframes \" + animation + \"{\" + styles + \"}\");\n    return animation;\n  };\n\n  var injectGlobal = function injectGlobal() {\n    var styles = createStyles.apply(this, arguments);\n    insert('', styles);\n  };\n\n  function getRegisteredStyles(registeredStyles, classNames) {\n    var rawClassName = '';\n    classNames.split(' ').forEach(function (className) {\n      if (caches.registered[className] !== undefined) {\n        registeredStyles.push(className);\n      } else {\n        rawClassName += className + \" \";\n      }\n    });\n    return rawClassName;\n  }\n\n  function merge(className, sourceMap) {\n    var registeredStyles = [];\n    var rawClassName = getRegisteredStyles(registeredStyles, className);\n\n    if (registeredStyles.length < 2) {\n      return className;\n    }\n\n    return rawClassName + css(registeredStyles, sourceMap);\n  }\n\n  function cx() {\n    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      classNames[_key2] = arguments[_key2];\n    }\n\n    return merge(classnames(classNames));\n  }\n\n  function hydrateSingleId(id) {\n    caches.inserted[id] = true;\n  }\n\n  function hydrate(ids) {\n    ids.forEach(hydrateSingleId);\n  }\n\n  function flush() {\n    if (isBrowser) {\n      sheet.flush();\n      sheet.inject();\n    }\n\n    caches.inserted = {};\n    caches.registered = {};\n  }\n\n  if (isBrowser) {\n    var chunks = document.querySelectorAll(\"[data-emotion-\" + key + \"]\");\n    Array.prototype.forEach.call(chunks, function (node) {\n      // $FlowFixMe\n      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe\n\n      node.getAttribute(\"data-emotion-\" + key).split(' ').forEach(hydrateSingleId);\n    });\n  }\n\n  var emotion = {\n    flush: flush,\n    hydrate: hydrate,\n    cx: cx,\n    merge: merge,\n    getRegisteredStyles: getRegisteredStyles,\n    injectGlobal: injectGlobal,\n    keyframes: keyframes,\n    css: css,\n    sheet: sheet,\n    caches: caches\n  };\n  context.__SECRET_EMOTION__ = emotion;\n  return emotion;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createEmotion);\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/create-emotion/dist/index.esm.js?"
					);

					/***/
				},

			/***/ './packages/typography/node_modules/emotion/dist/index.esm.js':
				/*!********************************************************************!*\
  !*** ./packages/typography/node_modules/emotion/dist/index.esm.js ***!
  \********************************************************************/
				/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						'__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });\n/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./packages/typography/node_modules/create-emotion/dist/index.esm.js");\n\n\nvar context = typeof global !== \'undefined\' ? global : {};\n\nvar _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),\n    flush = _createEmotion.flush,\n    hydrate = _createEmotion.hydrate,\n    cx = _createEmotion.cx,\n    merge = _createEmotion.merge,\n    getRegisteredStyles = _createEmotion.getRegisteredStyles,\n    injectGlobal = _createEmotion.injectGlobal,\n    keyframes = _createEmotion.keyframes,\n    css = _createEmotion.css,\n    sheet = _createEmotion.sheet,\n    caches = _createEmotion.caches;\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/emotion/dist/index.esm.js?'
					);

					/***/
				},

			/***/ './packages/typography/node_modules/stylis-rule-sheet/index.js':
				/*!*********************************************************************!*\
  !*** ./packages/typography/node_modules/stylis-rule-sheet/index.js ***!
  \*********************************************************************/
				/*! no static exports found */
				/***/ function(module, exports, __webpack_require__) {
					eval(
						"(function (factory) {\n\t true ? (module['exports'] = factory()) :\n\t\tundefined\n}(function () {\n\n\t'use strict'\n\n\treturn function (insertRule) {\n\t\tvar delimiter = '/*|*/'\n\t\tvar needle = delimiter+'}'\n\n\t\tfunction toSheet (block) {\n\t\t\tif (block)\n\t\t\t\ttry {\n\t\t\t\t\tinsertRule(block + '}')\n\t\t\t\t} catch (e) {}\n\t\t}\n\n\t\treturn function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {\n\t\t\tswitch (context) {\n\t\t\t\t// property\n\t\t\t\tcase 1:\n\t\t\t\t\t// @import\n\t\t\t\t\tif (depth === 0 && content.charCodeAt(0) === 64)\n\t\t\t\t\t\treturn insertRule(content+';'), ''\n\t\t\t\t\tbreak\n\t\t\t\t// selector\n\t\t\t\tcase 2:\n\t\t\t\t\tif (ns === 0)\n\t\t\t\t\t\treturn content + delimiter\n\t\t\t\t\tbreak\n\t\t\t\t// at-rule\n\t\t\t\tcase 3:\n\t\t\t\t\tswitch (ns) {\n\t\t\t\t\t\t// @font-face, @page\n\t\t\t\t\t\tcase 102:\n\t\t\t\t\t\tcase 112:\n\t\t\t\t\t\t\treturn insertRule(selectors[0]+content), ''\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\treturn content + (at === 0 ? delimiter : '')\n\t\t\t\t\t}\n\t\t\t\tcase -2:\n\t\t\t\t\tcontent.split(needle).forEach(toSheet)\n\t\t\t}\n\t\t}\n\t}\n}))\n\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/node_modules/stylis-rule-sheet/index.js?"
					);

					/***/
				},

			/***/ './packages/typography/styles/style.ts':
				/*!*********************************************!*\
  !*** ./packages/typography/styles/style.ts ***!
  \*********************************************/
				/*! exports provided: typographyStyle */
				/***/ function(module, __webpack_exports__, __webpack_require__) {
					'use strict';
					eval(
						"__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typographyStyle\", function() { return typographyStyle; });\n/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ \"./packages/typography/node_modules/emotion/dist/index.esm.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\nvar typographyStyle = {\n  typographyFont: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    display: 'block',\n    margin: 0\n  }),\n  sizeH1: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 300,\n    fontSize: '6rem',\n    lineHeight: 1,\n    letterSpacing: '-0.01562em'\n  }),\n  sizeH2: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '3.75rem',\n    lineHeight: 1,\n    letterSpacing: '-0.00833em'\n  }),\n  sizeH3: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '3rem',\n    lineHeight: 1.04,\n    letterSpacing: '0em'\n  }),\n  sizeH4: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '2.125rem',\n    lineHeight: 1.17,\n    letterSpacing: '0.00735em'\n  }),\n  sizeH5: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '1.5rem',\n    lineHeight: 1.33,\n    letterSpacing: '0em'\n  }),\n  sizeH6: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '1.25rem',\n    lineHeight: 1.6,\n    letterSpacing: '0.00735em'\n  }),\n  sizeBody: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '0.875rem',\n    lineHeight: 1.57,\n    letterSpacing: '0.01071em'\n  }),\n  sizeTitle: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 400,\n    fontSize: '1rem',\n    lineHeight: 1.2,\n    letterSpacing: '0.00938em'\n  }),\n  sizeButton: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    fontFamily: \"'Roboto', 'Helvetica', 'Arial', sans-serif\",\n    fontWeight: 500,\n    fontSize: '0.875rem',\n    lineHeight: 1.5,\n    letterSpacing: '0.02857em',\n    textTransform: 'uppercase'\n  }),\n  txCenter: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    textAlign: 'center'\n  }),\n  txLeft: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    textAlign: 'left'\n  }),\n  txRight: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    textAlign: 'right'\n  }),\n  txInherit: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    textAlign: 'inherit'\n  }),\n  txJustify: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    textAlign: 'justify'\n  }),\n  noWarp: Object(emotion__WEBPACK_IMPORTED_MODULE_0__[\"css\"])({\n    overflow: 'hidden',\n    textOverflow: 'ellipsis',\n    whiteSpace: 'nowrap'\n  })\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(typographyStyle, \"typographyStyle\", \"/Users/xuzihao/project/xyzUI/packages/typography/styles/style.ts\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack://xyz-ui-typography/./packages/typography/styles/style.ts?"
					);

					/***/
				},

			/***/ react:
				/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
				/*! no static exports found */
				/***/ function(module, exports) {
					eval(
						'module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://xyz-ui-typography/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?'
					);

					/***/
				},

			/******/
		}
	);
});
