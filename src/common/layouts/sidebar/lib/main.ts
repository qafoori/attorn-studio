import { App, Menu, ipcMain, MenuItemConstructorOptions } from 'electron'
import * as Lib from '.';
import * as EVENTS from '../../../constants/events';



export const sideBarMainProcess = (_app: App) => {
  let moreOptionsMenu = Menu.buildFromTemplate([])


  ipcMain.on(EVENTS.SET_MORE_OPTIONS, ({ sender }, rowMsg: string) => {
    const msg = <Lib.T.Button[]>JSON.parse(rowMsg)
    const moreOptions: MenuItemConstructorOptions[] = [];

    msg.forEach(item =>
      moreOptions.push({
        label: item.title,
        accelerator: item.accelerator
      })
    )

    moreOptionsMenu = Menu.buildFromTemplate(moreOptions)
  })




  ipcMain.on(EVENTS.MORE_OPTIONS, ({ sender }) => {
    moreOptionsMenu.popup()
  })

}
