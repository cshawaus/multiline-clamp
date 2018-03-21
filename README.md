# Multiline Clamp

[![gzipped size][badge-gzip]](#no-link) [![build status][badge-travis]][link-travis] [![npm][badge-version]][link-npm] [![jsDelivr][badge-jsdelivr]][link-jsdelivr]

[badge-gzip]: https://badges.herokuapp.com/size/github/cshawaus/multiline-clamp/master/dist/multiline-clamp.min.js?gzip=true&label=gzipped%20size
[badge-travis]: https://api.travis-ci.org/cshawaus/multiline-clamp.svg
[badge-version]: https://img.shields.io/npm/v/multiline-clamp.svg
[link-travis]: https://travis-ci.org/cshawaus/multiline-clamp
[link-npm]: https://www.npmjs.com/package/multiline-clamp
[badge-jsdelivr]: https://data.jsdelivr.com/v1/package/npm/multiline-clamp/badge?style=rounded
[link-jsdelivr]: https://www.jsdelivr.com/package/npm/multiline-clamp

Even in the modern age of browsers, technologies and API's alike; we still don't have a full-proof method that enables a designers vision when they show off some cool multiline text with an ellipsis at the end. I needed a solution for a project that not only allowed me to clamp text over multiple lines but also over multiple breakpoints too.

Looking around the web I found a couple of decent libraries but nothing that has decent breakpoint support out-of-the-box.

## So How Does It Work?

_Good question!_

Rather than calculating positions, widths etc., my solution is allowing a developer to specifically define how many characters should be displayed before a clamp is applied. This solution also takes HTML elements into account which can break the clamp entitely, so instead I also allow a configurable regular expression to be defined which automatically strips elements out if they are at the end which has the added benifit of not destroying the original intention of the text.

## Browser Support
I don't claim to have 100% browser support but if you find an issue please [create one](https://github.com/cshawaus/multiline-clamp/issues/new) and I'll try and get to it.

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 10+ ✔ |

## Installation

Using npm:

```bash
$ npm install multiline-clamp --save
```

Using Yarn:

```bash
$ yarn add multiline-clamp
```

Using CDN:

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/multiline-clamp/dist/multiline-clamp.min.js"></script>

<!-- unpkg -->
<script src="https://unpkg.com/multiline-clamp/dist/multiline-clamp.min.js"></script>
```

## Usage

If you are using a tool such as Webpack or Rollup, you may use ES6 or CommonJS imports which expose the `MultilineClamp` class.

```js
var MultilineClamp = require('multiline-clamp');
```

```js
import MultilineClamp from 'multiline-clamp';
```

## Example

Getting set up is quick and simple, simply define the element you wish to clamp on your page and you're good to go.

```js
new MultilineClamp(document.querySelector('p'))
```

### Responsive
You can also define per breakpoint clamps for any resolution you choose. This can be done by setting the `responsive` property which accepts an object.

```js
new MultilineClamp(document.querySelector('p'), {
  responsive: {
    768: 50,
    480: 30
  }
})
```

## API

### `MultilineClamp(target, options)`

<table>
  <tr>
    <th>parameter</th>
    <th>description</th>
  </tr>
  <tr>
    <th><code>target</code></th>
    <td>
      Type: <code>element</code><br>
      Required: <code>yes</code><br><br>
    </td>
  </tr>
  <tr>
    <th><code>options</code></th>
    <td>
      Type: <code>object</code><br>
      Default: <code>{}</code><br>
      Required: <code>no</code><br><br>
      Please see the <a href="#options">options</a> list below for a complete list.
    </td>
  </tr>
</table>

### Options

### `clamp`
`string | element`, defaults to `...`.

A string or element that is appended after the clamped content. When using an element you can simply pass the `HTMLElement` node as the value.

### `clampSize`
`number`, defaults to `72`.

The number of characters that should appear before the ellipsis.

### `responsive`
`boolean | { [number]: number }`, defaults to `false`.

Allows an object of clamps to be defined for different breakpoints. Please see the <a href="#responsive">example</a> above.

### `tagsExpression`
`expression`, defaults to `/<(.|\n)*?>/g`.

Regular expression for matching certain tags within the content.

### `trimWhitespace`
`boolean | expression`, defaults to `true`.

Defines whether the whitespace before/after the content should be stripped out. `false` disables this functionality, setting a regular expression allows more finite control over how the spaces are handled.

## Resources

* [Changelog](https://github.com/cshawaus/multiline-clamp/blob/master/CHANGELOG.md)

## License

MIT
