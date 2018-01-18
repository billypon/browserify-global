var concat = require('concat-stream');

module.exports = function (b, opts) {
    var bundle = b.bundle;
    b.bundle = function (cb) {
        var output = bundle.call(b);
        if (cb) {
            output.on('error', cb);
            output.pipe(concat(function (body) {
                var src = body.toString();
                src = src.replace(new RegExp('([\'"])' + (b.basedir || process.cwd()), 'g'), '__dirname + $1');
                cb(null, new Buffer(src));
            }));
        }
    }
}
