// CommonJS modules
const electron = require('electron')

// Module to create native browser window
const BrowserWindow = electron.BrowserWindow
// Module to control application life
const app = electron.app

const path = require('path')
const url = require('url')

app.on('ready', () => {
  //createWindow() // commented for avoiding double window issue
})

// Icon Configuration
const iconPath = process.platform !== 'darwin'
  ? 'www/public/favicon.ico'
  : 'www/public/favicon.icns';

// PHP Server COnfiguration
const PHPServer = require('php-server-manager');

const port = 5555, host = '127.0.0.1';
const serverUrl = 'http://' + host + ':' + port + '/';

// PHP Server Creation
const server = new PHPServer({
  // php: '${__dirname}/php/php.exe',
  host: host,
  port: port,
  directory: __dirname + '/www/public',
  script: __dirname + '/www/server.php',
  directives: {
    display_errors: 1,
    expose_php: 1
  }
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Run PHP Server
  server.run();

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
    icon: path.join(__dirname, iconPath)
  })

  mainWindow.loadURL(serverUrl)
  
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    // PHP SERVER QUIT
    server.close();
    mainWindow = null;
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow) // <== this is extra so commented, enabling this can show 2 windows..

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    // PHP SERVER QUIT
    server.close();
    app.quit();
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

