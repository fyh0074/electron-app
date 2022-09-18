const { app, BrowserWindow } = require('electron')
const WinState = require('electron-win-state').default
const path = require('path')
const createWindow = () => {
    const winState = new WinState({
        defaultWidth: 1000,
        dafaultHeight: 800
    })
    const win = new BrowserWindow({
        ...winState.winOptions,
        webPreferences: {
            //定义预加载的js
            preload: path.join(__dirname, './preload/index.js')
        }

    })

    win.loadURL('http://127.0.0.1:5173/')
    //临时打开调试窗口(开发者工具)
    win.webContents.openDevTools()
    winState.manage(win)
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
//退出程序后清除内存
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})