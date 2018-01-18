var path = require('path');
var insert = require('insert-module-globals')

var basedir;

insert.vars.__dirname = function (file) {
    var dirname = path.relative(basedir, path.dirname(file));
    return '__dirname' + (dirname ? '+' + JSON.stringify(dirname) : dirname);
}

insert.vars.__filename = function (file) {
    var filename = path.relative(basedir, file);
    return '__filename' + (filename ? '+' +JSON.stringify('/' + filename) : filename);
}

module.exports = function (b, opts) {
    basedir = opts.basedir || process.cwd();
}
