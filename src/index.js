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
  storeClampElement = null

  /**
   * Constructor for the `MultilineClamp` class.
   *
   * @param {HTMLElement|NodeList} targets Target elements to apply a clamp to
   * @param {Object}               options Option overrides
   */
  constructor(targets, options = {}) {
    const extendedOptions = mergeDefaultOptionsWithCustomOverrides(options)

    // Bind the options to the instance
    this.options = extendedOptions

    // Define the target elements
    this.targets = targets instanceof window.NodeList ? [...targets] : [targets]

    // Set up each target
    this.targets.forEach((target) => {
      // Get the original content for the target
      if (!target.originalContent) {
        target.originalContent = this.getTargetContents(target)
      }

      // Match all the tags in the target elements content
      if (extendedOptions.tagsExpression instanceof window.RegExp) {
        target.tags = target.originalContent.match(extendedOptions.tagsExpression) || []
      }

      // Start clamp'n!
      this.clamp(target)
    })

    // Register this instance with the resize handler
    registerInstanceWithResizeHandler(this)
  }

  /**
   * Retrieves the contents of the target element and applies any triming to it.
   *
   * @memberof MultilineClamp
   * @param  {HTMLElement} target A target element to get content for
   * @return {String}             The parsed contents for the target
   */
  getTargetContents(target) {
    let html = target.innerHTML
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
   * @param {HTMLElement} target Target element to apply a clamp to
   */
  clamp(target) {
    const { characterLength } = this
    const { originalContent } = target
    let content = originalContent

    // If the length of the content doesn't exceed the clamp size simply do nothing!
    if (content.length <= characterLength) return

    // Clamp the content
    content = content.substring(0, characterLength).trim()

    // Let's check all of the tags we have, if any are missing or cut off we need to take
    // the string back to the point where the opening tag begins.
    const foundTags = this.findTagsInContent(target)

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
   * Re-applies the clamp to each target defined.
   */
  refreshClamp() {
    this.targets.forEach(target => this.clamp(target))
  }

  /**
   * Strips away the content up until the point a tag can't be found in the string.
   *
   * @memberof MultilineClamp
   * @param  {HTMLElement} target Target element to apply a clamp to
   * @return {Array}              Tags that were found in the substring content
   */
  findTagsInContent(target) {
    const foundTags = []
    const { originalContent, tags } = target

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
          element : tag,
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
    const { partialTags } = this.options
    let newContent = content

    foundTags.forEach((tag, index) => {
      const tagLength = tag.element.length
      const tagFromContent = content.substr(tag.offset, tagLength)

      if (tagLength !== tagFromContent.length) {
        const lastTag = foundTags[index - 1]

        switch (partialTags) {
          case 'pull':
            // Simply pull the content back to just before the previous tag
            newContent = newContent.substring(0, lastTag.offset)
            break

          case 'pull-and-retain':
            if (tag.closing) {
              newContent = newContent.substring(0, tag.offset)

              // Grab the last bit of content before the previous tag
              const contentEnd = newContent.substr(lastTag.offset + lastTag.element.length)

              // Now remove the previous tag from the content and append the original ending back on
              newContent = newContent.substring(0, lastTag.offset) + contentEnd
            }
            break

          case 'complete':
          default:
            if (tag.closing) {
              // Fixes the incomplete tag by replacing it with the original element
              newContent = newContent.substring(0, tag.offset) + tag.element
            }
            break
        }
      }
    })

    return newContent
  }

  /**
   * Returns the clamp size for the current breakpoint. If responsive clamps aren't enabled
   * the default clamp size is used instead.
   *
   * @memberof MultilineClamp
   * @return {Number} The clamp size to contain the content to
   */
  get characterLength() {
    const { clampSize, responsive } = this.options
    const windowWidth = window.innerWidth

    let size
    if (responsive instanceof window.Object) {
      Object.keys(responsive).forEach((breakpoint) => {
        if (windowWidth <= breakpoint && !size) {
          size = responsive[breakpoint]
        }
      })
    }

    return size || clampSize
  }

  /**
   * Builds the clamp element that is appended to the end of the content.
   *
   * @memberof MultilineClamp
   * @return {HTMLElement} The DOM element for the clamp
   */
  get clampElement() {
    // If the clamp already exists, use the stored version and clone it
    if (this.storedClampElement) {
      return this.storedClampElement.cloneNode(true)
    }

    const { clamp } = this.options
    let clampElement = clamp

    // Create a new `span` element to wrap the clamp text within if the given element is a string
    if (!(clampElement instanceof window.HTMLElement)) {
      clampElement = document.createElement('span')
      clampElement.appendChild(document.createTextNode(clamp))
    }

    // Cache the element away so we don't have to re-generate it again
    this.storedClampElement = clampElement
    return clampElement
  }
}

export default MultilineClamp

// Expose `MultilineClamp` to the global scope
window.MultilineClamp = MultilineClamp
