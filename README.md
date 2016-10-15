# electron-test

    - Must work on Mac and Windows
    - Everything must be automated

    - Windows package (.exe)
    - Windows installer
    - On Windows, files must be copied to Program Files

    - Mac package (.app)
    - Mac installer
    - On Mac, files must be copied to Applications

    - Must load on startup
    - Must be signed (app and/or installer)
    - Must have internal folders that are accessible from main app (.exe or .app)
    - Must support autoupdate

## Libraries

### Executable

electron-userland/electron-packager                8.1.0     39 releases     2,491 / 14,277

    A complete solution to package and build a ready for distribution Electron
    app for MacOS, Windows and Linux with “auto update” support out of the box

### Installer
    
electron-userland/electron-builder                 7.13.0   212 releases     1,317 / 12,378

    Package and distribute your Electron app with OS-specific bundles (.app,
    .exe etc) via JS or CLI

    If you really want to go to town, take a look at electron-builder which
    takes the packages produced by electron-packager and creates automated
    installers.

atom/grunt-electron-installer                      2.1.0     30 releases       216 /  1,417
    
    Grunt task to generate Windows installers for Electron apps

unindented/electron-installer-windows              0.2.0      4 releases        34 /    188

    Create a Windows package for your Electron app.
    
Aluxian/electron-windows-installer                 1.4.4     25 releases        27 /    212

    Build Windows installers for Electron apps using Squirrel. Works with Gulp!

unindented/grunt-electron-installer-windows        0.2.0      4 releases         1 /      7

    Create a Windows package for your Electron app.

