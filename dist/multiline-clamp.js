/*!
 * multiline-clamp v1.3.0
 * © 2018 by Chris Shaw
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["multiline-clamp"] = factory();
	else
		root["multiline-clamp"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(this, function (_exports) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0; /**
                                                                                                                                                                                                                                                                                                                                                                                                  * Default options for the `MultilineClamp` class.
                                                                                                                                                                                                                                                                                                                                                                                                  * @type {Object}
                                                                                                                                                                                                                                                                                                                                                                                                  */
  var defaultOptions = {
    /**
                          * A string or element that is appended after the clamped content.
                          * @type {String|HTMLElement}
                          */
    clamp: '...',

    /**
                   * The number of characters that should appear before the ellipsis.
                   * @type {Number}
                   */
    clampSize: 72,

    /**
                    * Defines how partial/invalid tags are handled when found in a clamped string.
                    * @type {String}
                    */
    partialTags: 'complete',

    /**
                              * Allows an object of clamps to be defined for different breakpoints.
                              * @type {Boolean|Object}
                              */
    responsive: false,

    /**
                        * Regular expression for matching certain tags within the content.
                        * @type {RegExp}
                        */
    tagsExpression: /<(.|\n)*?>/g,

    /**
                                    * Should whitespace around the content be stripped out.
                                    * @type {Boolean|RegExp}
                                    */
    trimWhitespace: true };var _default =


  defaultOptions;_exports.default = _default;});

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./config */ "./src/config.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(this, function (_exports, _config) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.registerInstanceWithResizeHandler = registerInstanceWithResizeHandler;_exports.mergeDefaultOptionsWithCustomOverrides = mergeDefaultOptionsWithCustomOverrides;_config = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * @type {Boolean}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */
  var resizeHandlerBound = false;

  /**
                                   * @type {Number|null}
                                   */
  var resizeTimeout;

  /**
                      * @type {Array}
                      */
  var multilineInstances = [];

  /**
                                * Binds a `resize` event to the window which is used to adjust the content clamp when the user
                                * changes the size of their browser.
                                */
  function bindResizeHandler() {
    window.addEventListener('resize', function () {
      // Clear the timeout
      clearTimeout(resizeTimeout);

      // Start timing for event 'completion'
      resizeTimeout = setTimeout(function () {
        multilineInstances.forEach(function (instance) {return instance.refreshClamp();});
      }, 100);
    });
  }

  /**
     * Pushes the `MultilineClamp` instance into an array.
     *
     * @param {MultilineClamp} instance The `MultilineClamp` instance
     */
  function registerInstanceWithResizeHandler(instance) {
    var found = false;
    multilineInstances.forEach(function (mli) {
      if (mli.target === instance.target) {
        found = true;
      }
    });

    // Only push new instances that haven't already been registered
    if (!found) {
      multilineInstances.push(instance);
    }

    // Bind a resize handler to the window if one already hasn't been
    if (!resizeHandlerBound) {
      // Simple debounce method borrowed from:
      // http://bencentra.com/code/2015/02/27/optimizing-window-resize.html
      bindResizeHandler();
      resizeHandlerBound = true;
    }
  }

  /**
     * Overrides the default options with any user-defined ones which are valid.
     *
     * @param   {Object} overrides User-defined options
     * @returns {Object}
     */
  function mergeDefaultOptionsWithCustomOverrides(overrides) {
    // Lazy clone, destroys any custom object instances
    var defaults = JSON.parse(JSON.stringify(_config.default));

    // Fix the broken object instances
    defaults.tagsExpression = _config.default.tagsExpression;

    // Clamp appendix
    if (typeof overrides.clamp === 'string' || overrides.clamp instanceof window.HTMLElement) {
      defaults.clamp = overrides.clamp;
    }

    // Clamp size for all devices
    if (overrides.clampSize && !Number.isNaN(overrides.clampSize)) {
      defaults.clampSize = overrides.clampSize;
    }

    // Partial tags
    if (
    typeof overrides.partialTags === 'string' &&
    /^complete|pull|pull-and-retain$/.test(overrides.partialTags))
    {
      defaults.partialTags = overrides.partialTags;
    }

    // Responsive behaviours
    if (overrides.responsive !== false && overrides.responsive instanceof window.Object) {
      var breakpoints = {};var
      responsive = overrides.responsive;

      Object.keys(responsive).forEach(function (key) {
        var breakpoint = responsive[key];

        if (Number.isNaN(breakpoint)) {
          console.warn("The breakpoint for '".concat(key, "' contains an invalid value:"), breakpoint);
        } else {
          breakpoints[key] = breakpoint;
        }
      });

      // Only assign the `breakpoints` variable if it has keys
      defaults.responsive = Object.keys(breakpoints).length && breakpoints || false;
    }

    // Tags expression
    if (overrides.tagsExpression instanceof window.RegExp) {
      defaults.tagsExpression = overrides.tagsExpression;
    }

    // Whitespace trimming
    if (overrides.trimWhitespace && (
    overrides.trimWhitespace instanceof window.Boolean ||
    overrides.trimWhitespace instanceof window.RegExp))
    {
      defaults.trimWhitespace = overrides.trimWhitespace;
    }

    return defaults;
  }});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {if (true) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./functions */ "./src/functions.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else { var mod; }})(this, function (_exports, _functions) {"use strict";Object.defineProperty(_exports, "__esModule", { value: true });_exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}




  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Enables text on a website to be truncated over multiple lines which is not widely
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * supported in CSS natively.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @class MultilineClamp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */var
  MultilineClamp = /*#__PURE__*/function () {


    /**
                                              * Constructor for the `MultilineClamp` class.
                                              *
                                              * @param {HTMLElement|NodeList} targets Target elements to apply a clamp to
                                              * @param {Object}               options Option overrides
                                              */
    function MultilineClamp(targets) {var _this = this;var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};_classCallCheck(this, MultilineClamp);this.storeClampElement = null;
      var extendedOptions = (0, _functions.mergeDefaultOptionsWithCustomOverrides)(options);

      // Bind the options to the instance
      this.options = extendedOptions;

      // Define the target elements
      this.targets = targets instanceof window.NodeList ? _toConsumableArray(targets) : [targets];

      // Set up each target
      this.targets.forEach(function (target) {
        // Get the original content for the target
        if (!target.originalContent) {
          target.originalContent = _this.getTargetContents(target);
        }

        // Match all the tags in the target elements content
        if (extendedOptions.tagsExpression instanceof window.RegExp) {
          target.tags = target.originalContent.match(extendedOptions.tagsExpression) || [];
        }

        // Start clamp'n!
        _this.clamp(target);
      });

      // Register this instance with the resize handler
      (0, _functions.registerInstanceWithResizeHandler)(this);
    }

    /**
       * Retrieves the contents of the target element and applies any triming to it.
       *
       * @memberof MultilineClamp
       * @param  {HTMLElement} target A target element to get content for
       * @return {String}             The parsed contents for the target
       */_createClass(MultilineClamp, [{ key: "getTargetContents", value: function getTargetContents(
      target) {
        var html = target.innerHTML;var
        trimWhitespace = this.options.trimWhitespace;

        if (trimWhitespace) {
          if (trimWhitespace instanceof window.RegExp) {
            html = html.replace(trimWhitespace, '');
          } else {
            html = html.trim();
          }
        }

        return html;
      }

      /**
         * Takes the stored content string and removes part of it until the clamp size is reached.
         *
         * @memberof MultilineClamp
         * @param {HTMLElement} target Target element to apply a clamp to
         */ }, { key: "clamp", value: function clamp(
      target) {var
        characterLength = this.characterLength;var
        originalContent = target.originalContent;
        var content = originalContent;

        // If the length of the content doesn't exceed the clamp size simply do nothing!
        if (content.length <= characterLength) return;

        // Clamp the content
        content = content.substring(0, characterLength).trim();

        // Let's check all of the tags we have, if any are missing or cut off we need to take
        // the string back to the point where the opening tag begins.
        var foundTags = this.findTagsInContent(target);

        // If tags are found, clamp the string from the point which a valid tag exists at
        if (foundTags.length) {
          content = this.clampFromKnownTags(foundTags, content);
        }

        // Remove any spaces from the end of the string
        content = content.replace(/\s+$/g, '');

        // Ensure the end of the content is a letter of number and not a symbol and/or space
        var character;
        var cleaned = false;
        var count = content.length;

        while (--count >= 0 && !cleaned) {
          character = content[count];

          if (character === '>' || /(\w|\d)/i.test(character)) {
            content = content.substring(0, count + 1);
            cleaned = true;
          }
        }

        // Update the contents for the target element
        target.innerHTML = content;
        target.appendChild(this.clampElement);
      }

      /**
         * Re-applies the clamp to each target defined.
         */ }, { key: "refreshClamp", value: function refreshClamp()
      {var _this2 = this;
        this.targets.forEach(function (target) {return _this2.clamp(target);});
      }

      /**
         * Strips away the content up until the point a tag can't be found in the string.
         *
         * @memberof MultilineClamp
         * @param  {HTMLElement} target Target element to apply a clamp to
         * @return {Array}              Tags that were found in the substring content
         */ }, { key: "findTagsInContent", value: function findTagsInContent(
      target) {
        var foundTags = [];var
        originalContent = target.originalContent,tags = target.tags;

        var contentClone = originalContent;
        var contentOffset = 0;

        Object.keys(tags).forEach(function (tag) {
          tag = tags[tag];
          var offset = contentClone.indexOf(tag);

          if (offset !== -1) {
            // Remove all the content up until this point so we can eliminate pushing the same tag twice
            contentOffset = originalContent.length - contentClone.length;
            contentClone = contentClone.substr(offset + tag.length);

            // Push the tag into the list
            foundTags.push({
              closing: tag.indexOf('</') !== -1,
              element: tag,
              offset: contentOffset + offset });

          }
        });

        return foundTags;
      }

      /**
         * Uses the found tags in the clamped content to ensure that no broken tags are output to the
         * browser which can break things.
         *
         * @memberof MultilineClamp
         * @param  {Array}  foundTags Found tags in the substring content
         * @param  {String} content   The freshly clamped content
         * @return {String}           Modified content up until the point of the last found tag
         */ }, { key: "clampFromKnownTags", value: function clampFromKnownTags(
      foundTags, content) {var
        partialTags = this.options.partialTags;
        var newContent = content;

        foundTags.forEach(function (tag, index) {
          var tagLength = tag.element.length;
          var tagFromContent = content.substr(tag.offset, tagLength);

          if (tagLength !== tagFromContent.length) {
            var lastTag = foundTags[index - 1];

            switch (partialTags) {
              case 'pull':
                // Simply pull the content back to just before the previous tag
                newContent = newContent.substring(0, lastTag.offset);
                break;

              case 'pull-and-retain':
                if (tag.closing) {
                  newContent = newContent.substring(0, tag.offset);

                  // Grab the last bit of content before the previous tag
                  var contentEnd = newContent.substr(lastTag.offset + lastTag.element.length);

                  // Now remove the previous tag from the content and append the original ending back on
                  newContent = newContent.substring(0, lastTag.offset) + contentEnd;
                }
                break;

              case 'complete':
              default:
                if (tag.closing) {
                  // Fixes the incomplete tag by replacing it with the original element
                  newContent = newContent.substring(0, tag.offset) + tag.element;
                }
                break;}

          }
        });

        return newContent;
      }

      /**
         * Returns the clamp size for the current breakpoint. If responsive clamps aren't enabled
         * the default clamp size is used instead.
         *
         * @memberof MultilineClamp
         * @return {Number} The clamp size to contain the content to
         */ }, { key: "characterLength", get: function get()
      {var _this$options =
        this.options,clampSize = _this$options.clampSize,responsive = _this$options.responsive;
        var windowWidth = window.innerWidth;

        var size;
        if (responsive instanceof window.Object) {
          Object.keys(responsive).forEach(function (breakpoint) {
            if (windowWidth <= breakpoint && !size) {
              size = responsive[breakpoint];
            }
          });
        }

        return size || clampSize;
      }

      /**
         * Builds the clamp element that is appended to the end of the content.
         *
         * @memberof MultilineClamp
         * @return {HTMLElement} The DOM element for the clamp
         */ }, { key: "clampElement", get: function get()
      {
        // If the clamp already exists, use the stored version and clone it
        if (this.storedClampElement) {
          return this.storedClampElement.cloneNode(true);
        }var

        clamp = this.options.clamp;
        var clampElement = clamp;

        // Create a new `span` element to wrap the clamp text within if the given element is a string
        if (!(clampElement instanceof window.HTMLElement)) {
          clampElement = document.createElement('span');
          clampElement.appendChild(document.createTextNode(clamp));
        }

        // Cache the element away so we don't have to re-generate it again
        this.storedClampElement = clampElement;
        return clampElement;
      } }]);return MultilineClamp;}();var _default =


  MultilineClamp;

  // Expose `MultilineClamp` to the global scope
  _exports.default = _default;window.MultilineClamp = MultilineClamp;});

/***/ })

/******/ });
});
//# sourceMappingURL=multiline-clamp.map