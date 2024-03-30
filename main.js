const { app, BrowserWindow} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        frame: false,
        transparent: false,
        alwaysOnTop: true,
        resizable: false,
        focusable: true,
    });

    win.loadURL("https://open.spotify.com/");
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        app.quit();
    }
});