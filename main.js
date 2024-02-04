console.log("main process working");
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url"); // Import the url module

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const startURL = `file://${path.join(__dirname, "./app/build/index.html")}`;

  win.loadURL(startURL);
  win.webContents.openDevTools(); // Opens Developer Tools
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
