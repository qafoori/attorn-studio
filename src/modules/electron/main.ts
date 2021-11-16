// MIT License
//
// Copyright (c) 2021 Attorn Studio by qafoori
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


import { app, BrowserWindow, ipcMain } from 'electron';
import { initializeTheme, installTheme, uninstallTheme, changeTheme } from '@attorn/electron-theme'
import { AttornElectronTheme } from '@attorn/electron-theme'
import { themes } from '../../common/constants/themes';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    minHeight: 250,
    minWidth: 400
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



ipcMain.on('before-ready-to-show', ({ sender }) => {
  const { allThemes, activeTheme, root } = initializeTheme(themes);
  sender.send('get-css-root', root);
})


ipcMain.on('install-theme', (_, { name, theme }: AttornElectronTheme.Themes) => {
  installTheme({ name, theme });
})

ipcMain.on('uninstall-theme', (_, msg: AttornElectronTheme.Themes) => {
  uninstallTheme(msg.name);
})

// ipcMain.on('change-theme', ({ sender }, msg: string) => {
//   const result = changeTheme(msg)
//   sender.send('change-theme-result', result);
// })
