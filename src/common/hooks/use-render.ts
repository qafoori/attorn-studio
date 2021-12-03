import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { addThemeToStylesheet } from '@attorn/electron-theme';
import * as EVENTS from '../constants/events';

export const useRender = () => {
  const [didMount, setDidMount] = useState<boolean>(false);

  const onStartup = () => {
    ipcRenderer.send(EVENTS.BEFORE_READY_TO_SHOW)
  }

  ipcRenderer.on(EVENTS.GET_CSS_ROOTS, (_, root) => {
    setDidMount(true);
    addThemeToStylesheet(root);
  });

  useEffect(() => ipcRenderer.send(EVENTS.BEFORE_READY_TO_SHOW), []);
  return { didMount }
}
