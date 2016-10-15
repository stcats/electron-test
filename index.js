require('shelljs/global');

const electron = require('electron');
const path = require('path');

const { app, dialog, Menu, Tray } = electron;

var tray = null;

app.on('ready', function() {
    tray = new Tray(__dirname + path.sep + 'icon.png');

    var menu = Menu.buildFromTemplate([
        {
            label: 'Electron Test (' + process.env.npm_package_version + ')',
            enabled: 'false'
        },
        {
            label: 'Run script',
            click: function() {
                const command = __dirname + path.sep + 'tools' + path.sep + 'script.bat';

                exec(command, { async: true }, function(code, stdout, stderr) {
                    console.log('code  ', code);
                    console.log('stdout', stdout);
                    console.log('stderr', stderr);
                    console.log(dialog.showMessageBox({
                        buttons: [],
                        message: stdout
                    }));
                });
            }
        },
        {
            label: 'Quit',
            click: function() {
                app.quit();
            }
        }
    ]);

    tray.setContextMenu(menu);
});
