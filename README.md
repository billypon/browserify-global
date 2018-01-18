# getting started

Pass the `commondir` option to browserify, and set it to false. And then, use this plugin.

# example

main.js:

``` js
console.log(__dirname);
console.log(__filename);
```

now you can bundle like this:

``` js
var browserify = require('browserify');
var b = browserify();
var b = browserify('main.js', {
    commondir: false,
	plugin: ['browserify-global']
});
b.bundle().pipe(process.stdout);
```

or like this:

``` sh
browserify --commondir false -p browserify-global main.js
```
