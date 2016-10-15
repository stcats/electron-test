require('shelljs/global');

var packager = require('electron-packager');
var path = require('path');

exec('rm -rf ' + __dirname + path.sep + '..' + path.sep + 'dist', { async: false }, function(code, stdout, stderr) {
    if (code) {
        console.log('stdout', stdout);
        console.log('stderr', stderr);
    }
});

var options = {
    dir: __dirname + path.sep + '..',
    platform: 'win32',
    arch: 'x64',
    icon: '',
    out: __dirname + path.sep + '..' + path.sep + 'dist',
    prune: false //FIXME had to turn this off
};

packager(options, function(err, appPaths) {
    if (err) {
        console.log('err', err);
        console.log('appPaths', appPaths);
    }
});
