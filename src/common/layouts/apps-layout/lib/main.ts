import { App, Menu, ipcMain, MenuItemConstructorOptions } from 'electron'
import * as EVENTS from '../../../constants/events';
import * as Lib from '.';
import { OnContextMenuPayloadTypes } from '../../../../../../@attorn-react-components/src/ui-components/explorer/lib/typing';




export const AppsLayoutMainProcess = (_app: App) => {
  const replyToContextMenu = (reply: Function, method: Lib.T.ExplorerItems) => {
    return reply(EVENTS.EXPLORER_ITEM_CONTEXT_MENU, method)
  }


  ipcMain.on(EVENTS.EXPLORER_ITEM_RIGHT_CLICK, ({ reply }, msg: OnContextMenuPayloadTypes) => {
    const newItem: MenuItemConstructorOptions[] = [
      {
        label: 'New File',
        accelerator: 'CommandOrControl+N',
        click: () => replyToContextMenu(reply, 'new-file')
      },
      {
        label: 'New Folder',
        accelerator: 'Shift+N',
        click: () => replyToContextMenu(reply, 'new-folder')
      },
    ]

    const codeGenerator: MenuItemConstructorOptions[] = [
      {
        label: 'Generate Code',
        accelerator: 'CommandOrControl+G',
        click: () => replyToContextMenu(reply, 'generate-code')
      }
    ]

    const openInTab: MenuItemConstructorOptions[] = [
      {
        label: 'Open in Tab',
        click: () => replyToContextMenu(reply, 'open-in-tab')
      }
    ]

    const edit: MenuItemConstructorOptions[] = [
      {
        label: 'Rename',
        accelerator: 'F2',
        click: () => replyToContextMenu(reply, 'rename')
      },
      {
        label: 'Delete',
        accelerator: 'Delete',
        click: () => replyToContextMenu(reply, 'delete')
      }
    ]

    const actions: MenuItemConstructorOptions[] = [
      {
        label: 'Copy',
        accelerator: 'CommandOrControl+C',
        click: () => replyToContextMenu(reply, 'copy')
      },
      {
        label: 'Cut',
        accelerator: 'CommandOrControl+X',
        click: () => replyToContextMenu(reply, 'cut')
      }
    ]

    const paste: MenuItemConstructorOptions[] = [
      {
        label: 'Paste',
        accelerator: 'CommandOrControl+V',
        click: () => replyToContextMenu(reply, 'paste')
      }
    ]

    const timing: MenuItemConstructorOptions[] = [
      {
        label: 'Undo',
        accelerator: 'CommandOrControl+Z',
        click: () => replyToContextMenu(reply, 'undo')
      },
      {
        label: 'Redo',
        accelerator: 'CommandOrControl+Shift+Z',
        click: () => replyToContextMenu(reply, 'redo')
      },
    ]

    const breakLine: MenuItemConstructorOptions = { type: 'separator' }

    const combinedItems: MenuItemConstructorOptions[] = [];
    switch (msg) {
      case 'file':
        combinedItems.push(...[
          ...codeGenerator,
          ...openInTab,
          breakLine,
          ...edit,
          breakLine,
          ...actions,
          breakLine,
          ...timing
        ]);
        break;

      case 'folder':
        combinedItems.push(...[
          ...newItem,
          breakLine,
          ...edit,
          breakLine,
          ...actions,
          ...paste,
          breakLine,
          ...timing
        ]);
        break;

      case 'whiteArea':
        combinedItems.push(...[
          ...newItem,
          breakLine,
          ...timing,
          breakLine,
          ...paste,
        ]);
        break;
    }


    const explorerItemMenu = Menu.buildFromTemplate(combinedItems);
    explorerItemMenu.popup()
  })
}
