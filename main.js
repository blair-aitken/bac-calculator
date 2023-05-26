const { app, BrowserWindow } = require('electron')

app.allowRendererProcessReuse = true;

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 750,
    height: 750
  })

  mainWindow.loadFile('index.html')

}

app.on('ready', () => {
  createWindow();
})
