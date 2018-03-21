import defaultOptions from './config'

/**
 * @type {Boolean}
 */
let resizeHandlerBound = false

/**
 * @type {Number|null}
 */
let resizeTimeout

/**
 * @type {Array}
 */
const multilineInstances = []

/**
 * Binds a `resize` event to the window which is used to adjust the content clamp when the user
 * changes the size of their browser.
 */
function bindResizeHandler() {
  window.addEventListener('resize', () => {
    // Clear the timeout
    clearTimeout(resizeTimeout)

    // Start timing for event 'completion'
    resizeTimeout = setTimeout(() => {
      multilineInstances.forEach(instance => instance.clamp())
    }, 100)
  })
}

/**
 * Pushes the `MultilineClamp` instance into an array.
 *
 * @param {MultilineClamp} instance The `MultilineClamp` instance
 */
export function registerInstanceWithResizeHandler(instance) {
  let found = false
  multilineInstances.forEach((mli) => {
    if (mli.target === instance.target) {
      found = true
    }
  })

  // Only push new instances that haven't already been registered
  if (!found) {
    multilineInstances.push(instance)
  }

  // Bind a resize handler to the window if one already hasn't been
  if (!resizeHandlerBound) {
    // Simple debounce method borrowed from:
    // http://bencentra.com/code/2015/02/27/optimizing-window-resize.html
    bindResizeHandler()
    resizeHandlerBound = true
  }
}

/**
 * Overrides the default options with any user-defined ones which are valid.
 *
 * @param   {Object} overrides User-defined options
 * @returns {Object}
 */
export function mergeDefaultOptionsWithCustomOverrides(overrides) {
  // Lazy clone, destroys any custom object instances
  const defaults = JSON.parse(JSON.stringify(defaultOptions))

  // Fix the broken object instances
  defaults.tagsExpression = defaultOptions.tagsExpression

  // Clamp appendix
  if (typeof overrides.clamp === 'string' || overrides.clamp instanceof window.HTMLElement) {
    defaults.clamp = overrides.clamp
  }

  // Clamp size for all devices
  if (overrides.clampSize && !Number.isNaN(overrides.clampSize)) {
    defaults.clampSize = overrides.clampSize
  }

  // Responsive behaviours
  if (overrides.responsive !== false && overrides.responsive instanceof window.Object) {
    const breakpoints = {}
    const { responsive } = overrides

    Object.keys(responsive).forEach((key) => {
      const breakpoint = responsive[key]

      if (Number.isNaN(breakpoint)) {
        console.warn(`The breakpoint for '${key}' contains an invalid value:`, breakpoint)
      } else {
        breakpoints[key] = breakpoint
      }
    })

    // Only assign the `breakpoints` variable if it has keys
    defaults.responsive = (Object.keys(breakpoints).length && breakpoints) || false
  }

  // Tags expression
  if (overrides.tagsExpression instanceof window.RegExp) {
    defaults.tagsExpression = overrides.tagsExpression
  }

  // Whitespace trimming
  if (overrides.trimWhitespace && (
    overrides.trimWhitespace instanceof window.Boolean ||
    overrides.trimWhitespace instanceof window.RegExp
  )) {
    defaults.trimWhitespace = overrides.trimWhitespace
  }

  return defaults
}
