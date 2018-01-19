var path = require('path');
var insertGlobals = require('insert-module-globals');

module.exports = function (b, opts) {
    var basedir = opts.basedir || process.cwd();
    var insertGlobalVars = b._options.insertGlobalVars || {};

    for (var x in insertGlobals.vars) {
        insertGlobalVars[x] = undefined;
    }
    insertGlobalVars.__dirname = function (file) {
        var dirname = path.relative(basedir, path.dirname(file));
        return '__dirname' + (dirname ? '+' + JSON.stringify(dirname) : dirname);
    },
    insertGlobalVars.__filename = function (file) {
        var filename = path.relative(basedir, file);
        return '__dirname' + (filename ? '+' +JSON.stringify('/' + filename) : filename);
    }

    b._options.insertGlobalVars = b._mdeps.options.insertGlobalVars = insertGlobalVars;
}
