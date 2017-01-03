import { app, BrowserWindow, Menu, Tray } from 'electron';
import path from 'path';
import menubar from 'menubar';
import express from '../express-app/app.js';

const mb = menubar({
  showDockIcon: true
});

function init(CONFIG) {

  let mainWindow;

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // This method will be called when Electron has done everything
  // initialization and ready for creating browser windows.
  app.on('ready', openWindow);
  app.on('activate', (e, hasVisibleWindows) => {
    if (!hasVisibleWindows) {
      openWindow();
    }
  });

  function openWindow() {
    express();
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.
    mainWindow.loadURL(`http://localhost:3000`);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  }

  function initDev() {
    BrowserWindow.addDevToolsExtension(__dirname + '/dev/react-dev');
  }
}

module.exports = init;
