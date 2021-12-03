import { useState } from 'react'
import { ipcRenderer } from 'electron';
import * as EVENTS from '../../../constants/events';
import * as Lib from '.';
import { OnContextMenuPayloadTypes, OnContextMenuEvent, ContextMenuHandlerState } from '../../../../../../@attorn-react-components/src/ui-components/explorer/lib/typing';



export const useAppsLayout = () => {
  const [rightClickedItem, setRightClickedItem] = useState<string | number>('');
  const [menuItemCaller, setMenuItemCaller] = useState<ContextMenuHandlerState>(null)

  ipcRenderer.removeAllListeners(EVENTS.EXPLORER_ITEM_CONTEXT_MENU)

  const onAddNew = () => {
    return Math.random()
  }


  const onRightClick = (
    id: string | number,
    type: OnContextMenuPayloadTypes,
    _evt: OnContextMenuEvent
  ) => {
    setRightClickedItem(id);
    ipcRenderer.send(EVENTS.EXPLORER_ITEM_RIGHT_CLICK, type)
  }


  ipcRenderer.on(EVENTS.EXPLORER_ITEM_CONTEXT_MENU, (_evt, item: Lib.T.ExplorerItems) => {
    switch (item) {
      case 'generate-code':
        console.log('custom method: ', 'generate-code')
        break;
      case 'open-in-tab':
        console.log('custom method: ', 'open-in-tab')
        break;
      default: setMenuItemCaller({ id: rightClickedItem, type: item })
    }
  })


  return {
    on: {
      addNew: onAddNew,
      rightClick: onRightClick
    },
    states: {
      menuItemCaller: { val: menuItemCaller, set: setMenuItemCaller }
    }
  }
}
