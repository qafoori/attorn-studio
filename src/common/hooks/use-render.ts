import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import { addThemeToStylesheet } from '@attorn/electron-theme';

export const useRender = () => {
  const [didMount, setDidMount] = useState<boolean>(false);

  const onStartup = () => {
    ipcRenderer.send('before-ready-to-show')
  }

  ipcRenderer.on('get-css-root', (_, root) => {
    setDidMount(true);
    addThemeToStylesheet(root);
  });

  useEffect(() => ipcRenderer.send('before-ready-to-show'), []);
  return { didMount }
}
