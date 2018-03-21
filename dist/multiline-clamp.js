/*!
 * multiline-clamp v1.0.0
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
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


defaultOptions;exports.default = _default;

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.registerInstanceWithResizeHandler = registerInstanceWithResizeHandler;exports.mergeDefaultOptionsWithCustomOverrides = mergeDefaultOptionsWithCustomOverrides;var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ "./src/config.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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
      multilineInstances.forEach(function (instance) {return instance.clamp();});
    }, 250);
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
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _functions = __webpack_require__(/*! ./functions */ "./src/functions.js");function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}




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
                                            * @param {HTMLElement} target  An target element to apply a clamp to
                                            * @param {Object}      options Option overrides
                                            */
  function MultilineClamp(target) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};_classCallCheck(this, MultilineClamp);this.tags = [];
    var extendedOptions = (0, _functions.mergeDefaultOptionsWithCustomOverrides)(options);
    this.options = extendedOptions;

    // Define the target element and original content
    this.target = target;
    this.originalContent = target.innerHTML;

    // Get the target contents
    var content = this.targetContents;

    // Store the original text in memory (non-persistent between page reloads)
    if (!target.originalContent) {
      target.originalContent = content;
    }

    // Match all the tags in the target elements content
    if (extendedOptions.tagsExpression instanceof window.RegExp) {
      this.tags = content.match(extendedOptions.tagsExpression);
    }

    // Start clamp'n!
    this.clamp();

    // Register this instance with the resize handler
    (0, _functions.registerInstanceWithResizeHandler)(this);
  }

  /**
     * Retrieves the contents of the target element and applies any triming to it.
     *
     * @memberof MultilineClamp
     * @return {String}
     */_createClass(MultilineClamp, [{ key: "clamp",















    /**
                                                      * Takes the stored content string and removes part of it until the clamp size is reached.
                                                      *
                                                      * @memberof MultilineClamp
                                                      */value: function clamp()
    {var
      characterLength = this.characterLength,originalContent = this.originalContent,target = this.target;
      var content = originalContent;

      // If the length of the content doesn't exceed the clamp size simply do nothing!
      if (content.length <= characterLength) return;

      // Restore the target contents to its original value
      if (target.html !== originalContent) {
        target.html = originalContent;
      }

      // Clamp the content
      content = content.substring(0, characterLength).trim();

      // Let's check all of the tags we have, if any are missing or cut off we need to take
      // the string back to the point where the opening tag begins.
      var foundTags = this.findTagsInContent();

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

        if (/(\w|\d)/i.test(character)) {
          content = content.substring(0, count + 1);
          cleaned = true;
        }
      }

      // Update the contents for the target element
      console.log(content);
      target.innerHTML = content;
      target.appendChild(this.clampElement);
    }

    /**
       * Strips away the content up until the point a tag can't be found in the string.
       *
       * @memberof MultilineClamp
       * @return {Array} Tags that were found in the substring content
       */ }, { key: "findTagsInContent", value: function findTagsInContent()
    {
      var foundTags = [];var
      originalContent = this.originalContent,tags = this.tags;

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
            name: tag,
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
    foundTags, content) {
      var clampOffset = content.length;
      var lastFound = false;

      foundTags.forEach(function (tag, index) {
        if (lastFound) return;

        var tagLength = tag.name.length;
        var contentOffset = content.substr(tag.offset, tagLength);

        if (tagLength !== contentOffset.length) {
          // Pull the content back to before the previous tag
          if (tag.closing) {
            var lastTag = foundTags[index - 1];
            lastFound = true;

            clampOffset = lastTag.offset;

            // Otherwise pull the content back to just before this tag
          } else {
            clampOffset = tag.offset;
          }
        }
      });

      return content.substring(0, clampOffset);
    }

    /**
       * Returns the clamp size for the current breakpoint, if responsive clamps aren't enabled the
       * default clamp size is used instead.
       *
       * @memberof MultilineClamp
       * @return {Number}
       */ }, { key: "targetContents", get: function get() {var html = this.target.innerHTML;var trimWhitespace = this.options.trimWhitespace;if (trimWhitespace) {if (trimWhitespace instanceof window.RegExp) {html = html.replace(trimWhitespace, '');} else {html = html.trim();}}return html;} }, { key: "characterLength", get: function get()
    {var
      responsive = this.options.responsive;
      var windowWidth = window.innerWidth;

      var clampSize;
      if (responsive instanceof window.Object) {
        Object.keys(responsive).forEach(function (breakpoint) {
          if (windowWidth >= breakpoint && !clampSize) {
            clampSize = responsive[breakpoint];
          }
        });
      }

      return clampSize || this.options.clampSize;
    }

    /**
       * Builds the clamp element that is appended to the end of the content.
       *
       * @memberof MultilineClamp
       * @return {HTMLElement}
       */ }, { key: "clampElement", get: function get()
    {var
      clamp = this.options.clamp;

      // If the clamp element is already an `HTMLElement`, simply return it
      if (clamp instanceof window.HTMLElement) return clamp;

      // Create a new `span` element to wrap the clamp text within
      var clampElement = document.createElement('span');
      clampElement.appendChild(document.createTextNode(clamp));

      return clampElement;
    } }]);return MultilineClamp;}();var _default =


MultilineClamp;

// Expose `MultilineClamp` to the global scope
exports.default = _default;window.MultilineClamp = MultilineClamp;

/***/ })

/******/ });
});
//# sourceMappingURL=multiline-clamp.map