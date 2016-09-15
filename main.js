/* jshint esversion: 6 */

const {
    app,
    BrowserWindow
} = require('electron');

let win;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    win = new BrowserWindow({
        name: "Inventory",
        width: 800,
        height: 600,
        toolbar: false,
        icon: `${__dirname}/app/assets/bag.png`
    });
    win.setMenu(null);


    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/app/index/index.html`);

    // Open the DevTools.
    win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

// In main process.
const {ipcMain} = require('electron');
ipcMain.on('add-item', (event, arg) => {
  console.log(arg);  // prints "ping"
  event.sender.send('item-added', `okay ${arg}`);
});
