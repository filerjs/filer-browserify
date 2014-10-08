## Filer for Browserify

This module provides a browser-compatible equivalent for node.js's `fs` module when browserifying your build. For more information on Filerjs, a JavaScript implementation of a full POSIX filesystem for the browser, see the [filerjs](http://github.com/filerjs/filer) repo on github.

### Usage | Step 1: Include as a dependency

```javascript
// package.json
{
  // ...
  "dependencies": {
  	"filer-browserify": "*"
  }
}
```

### Usage | Step 2: Map the module to `fs`

```javascript
// package.json
{
  "dependencies": {
  	"filer-browserify": "*"
  },
  "browser": {
  	"fs": "filer-browserify"
  }
}
```
### Usage | Step 3: Build

Browserify as normal!

## Contributing

Feel free to file issues as you see them, and hop on **#filer** on `irc.mozilla.org` to discuss bugs you would like to fix.
