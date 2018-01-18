# example

main.js:

``` js
console.log(__dirname);
console.log(__filename);
```

now you can bundle like this:

``` js
var browserify = require('browserify');
var b = browserify('main.js', {
	plugin: ['browserify-global']
});
b.bundle().pipe(process.stdout);
```

or like this:

``` sh
browserify -p browserify-global main.js
```
