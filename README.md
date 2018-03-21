# Multiline Clamp

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
