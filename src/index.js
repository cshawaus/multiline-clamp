import {
  mergeDefaultOptionsWithCustomOverrides,
  registerInstanceWithResizeHandler,
} from './functions'

/**
 * Enables text on a website to be truncated over multiple lines which is not widely
 * supported in CSS natively.
 *
 * @class MultilineClamp
 */
class MultilineClamp {
  tags = []

  /**
   * Constructor for the `MultilineClamp` class.
   *
   * @param {HTMLElement} target  An target element to apply a clamp to
   * @param {Object}      options Option overrides
   */
  constructor(target, options = {}) {
    const extendedOptions = mergeDefaultOptionsWithCustomOverrides(options)
    this.options = extendedOptions

    // Define the target element and original content
    this.target = target
    this.originalContent = target.innerHTML

    // Get the target contents
    const content = this.targetContents

    // Store the original text in memory (non-persistent between page reloads)
    if (!target.originalContent) {
      target.originalContent = content
    }

    // Match all the tags in the target elements content
    if (extendedOptions.tagsExpression instanceof window.RegExp) {
      this.tags = content.match(extendedOptions.tagsExpression)
    }

    // Start clamp'n!
    this.clamp()

    // Register this instance with the resize handler
    registerInstanceWithResizeHandler(this)
  }

  /**
   * Retrieves the contents of the target element and applies any triming to it.
   *
   * @memberof MultilineClamp
   * @return {String}
   */
  get targetContents() {
    let html = this.target.innerHTML
    const { trimWhitespace } = this.options

    if (trimWhitespace) {
      if (trimWhitespace instanceof window.RegExp) {
        html = html.replace(trimWhitespace, '')
      } else {
        html = html.trim()
      }
    }

    return html
  }

  /**
   * Takes the stored content string and removes part of it until the clamp size is reached.
   *
   * @memberof MultilineClamp
   */
  clamp() {
    const { characterLength, originalContent, target } = this
    let content = originalContent

    // If the length of the content doesn't exceed the clamp size simply do nothing!
    if (content.length <= characterLength) return

    // Clamp the content
    content = content.substring(0, characterLength).trim()

    // Let's check all of the tags we have, if any are missing or cut off we need to take
    // the string back to the point where the opening tag begins.
    const foundTags = this.findTagsInContent()

    // If tags are found, clamp the string from the point which a valid tag exists at
    if (foundTags.length) {
      content = this.clampFromKnownTags(foundTags, content)
    }

    // Remove any spaces from the end of the string
    content = content.replace(/\s+$/g, '')

    // Ensure the end of the content is a letter of number and not a symbol and/or space
    let character
    let cleaned = false
    let count = content.length

    while (--count >= 0 && !cleaned) {
      character = content[count]

      if (character === '>' || /(\w|\d)/i.test(character)) {
        content = content.substring(0, count + 1)
        cleaned = true
      }
    }

    // Update the contents for the target element
    target.innerHTML = content
    target.appendChild(this.clampElement)
  }

  /**
   * Strips away the content up until the point a tag can't be found in the string.
   *
   * @memberof MultilineClamp
   * @return {Array} Tags that were found in the substring content
   */
  findTagsInContent() {
    const foundTags = []
    const { originalContent, tags } = this

    let contentClone = originalContent
    let contentOffset = 0

    Object.keys(tags).forEach((tag) => {
      tag = tags[tag]
      const offset = contentClone.indexOf(tag)

      if (offset !== -1) {
        // Remove all the content up until this point so we can eliminate pushing the same tag twice
        contentOffset = originalContent.length - contentClone.length
        contentClone = contentClone.substr(offset + tag.length)

        // Push the tag into the list
        foundTags.push({
          closing : tag.indexOf('</') !== -1,
          name    : tag,
          offset  : contentOffset + offset,
        })
      }
    })

    return foundTags
  }

  /**
   * Uses the found tags in the clamped content to ensure that no broken tags are output to the
   * browser which can break things.
   *
   * @memberof MultilineClamp
   * @param  {Array}  foundTags Found tags in the substring content
   * @param  {String} content   The freshly clamped content
   * @return {String}           Modified content up until the point of the last found tag
   */
  clampFromKnownTags(foundTags, content) {
    let clampOffset = content.length
    let lastFound = false

    foundTags.forEach((tag, index) => {
      if (lastFound) return

      const tagLength = tag.name.length
      const contentOffset = content.substr(tag.offset, tagLength)

      if (tagLength !== contentOffset.length) {
        // Pull the content back to before the previous tag
        if (tag.closing) {
          const lastTag = foundTags[index - 1]
          lastFound = true

          clampOffset = lastTag.offset

        // Otherwise pull the content back to just before this tag
        } else {
          clampOffset = tag.offset
        }
      }
    })

    return content.substring(0, clampOffset)
  }

  /**
   * Returns the clamp size for the current breakpoint, if responsive clamps aren't enabled the
   * default clamp size is used instead.
   *
   * @memberof MultilineClamp
   * @return {Number}
   */
  get characterLength() {
    const { responsive } = this.options
    const windowWidth = window.innerWidth

    let clampSize
    if (responsive instanceof window.Object) {
      Object.keys(responsive).forEach((breakpoint) => {
        if (windowWidth <= breakpoint && !clampSize) {
          clampSize = responsive[breakpoint]
        }
      })
    }

    return clampSize || this.options.clampSize
  }

  /**
   * Builds the clamp element that is appended to the end of the content.
   *
   * @memberof MultilineClamp
   * @return {HTMLElement}
   */
  get clampElement() {
    const { clamp } = this.options

    // If the clamp element is already an `HTMLElement`, simply return it
    if (clamp instanceof window.HTMLElement) return clamp

    // Create a new `span` element to wrap the clamp text within
    const clampElement = document.createElement('span')
    clampElement.appendChild(document.createTextNode(clamp))

    return clampElement
  }
}

export default MultilineClamp

// Expose `MultilineClamp` to the global scope
window.MultilineClamp = MultilineClamp
