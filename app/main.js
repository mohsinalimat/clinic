/* eslint-disable */

// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,
  dialog
} = require('electron');

const exec = require('child_process').exec;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function showOpen() {
  dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [{
      name: 'Images',
      extensions: ['jpg', 'png', 'gif', 'jpeg']
    }]
  }, paths => {
    console.log(paths);
    mainWindow.webContents.send("paths", paths);
  });
};

const template = [{
  label: 'Menu',
  submenu: [{
      label: 'Add to Portfolio',
      click() {
        showOpen();
      }
    },
    {
      label: 'Quit',
      click() {
        app.quit();
      }
    }
  ]
}];



function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });


  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  exec("cd server && cd getting-started && npm start")

  //handle menu
  // var menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu);


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.