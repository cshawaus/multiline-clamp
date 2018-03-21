/**
 * Default options for the `MultilineClamp` class.
 * @type {Object}
 */
const defaultOptions = {
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
  trimWhitespace: true,
}

export default defaultOptions
