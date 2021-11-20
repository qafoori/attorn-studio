import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Lib from '.';
import { useWindowSize } from '../../../hooks/use-window-size';
import { ipcRenderer } from 'electron';


export const useSidebar = () => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState<number>(0)

  const BASE_ACCELERATOR = 'CommandOrControl+'

  const TOP_BUTTONS: Lib.T.Button[] = [
    {
      name: 'folder',
      onClick: () => { },
      title: t('sidebar.items.apiCaller'),
      active: true,
      accelerator: BASE_ACCELERATOR + 'a'
    },
    {
      name: 'code',
      onClick: () => { },
      title: t('sidebar.items.dbCanvas'),
      accelerator: BASE_ACCELERATOR + 'c'
    },
    {
      name: 'palette',
      onClick: () => { },
      title: t('sidebar.items.env'),
      accelerator: BASE_ACCELERATOR + 'e'
    },
    {
      name: 'chart',
      onClick: () => { },
      title: t('sidebar.items.monitoring'),
      accelerator: BASE_ACCELERATOR + 'm'
    },
    {
      name: 'copy',
      onClick: () => { },
      title: t('sidebar.items.dbMocker'),
      accelerator: BASE_ACCELERATOR + 'd'
    },
    {
      name: 'clock',
      onClick: () => { },
      title: t('sidebar.items.history'),
      accelerator: BASE_ACCELERATOR + 'h'
    },
    {
      name: 'trash',
      onClick: () => { },
      title: t('sidebar.items.trash'),
      accelerator: BASE_ACCELERATOR + 't'
    },
    {
      name: 'gear',
      onClick: () => { },
      title: t('sidebar.items.setting'),
      accelerator: BASE_ACCELERATOR + 'i'
    },
    {
      name: 'server',
      onClick: () => { },
      title: t('sidebar.items.mockServer'),
      accelerator: BASE_ACCELERATOR + 's'
    },
  ];


  const BOTTOM_BUTTONS: Lib.T.Button[] = [
    {
      name: 'github',
      onClick: () => { },
      title: t('sidebar.items.mockServer')
    },
    {
      name: 'download',
      onClick: () => { },
      title: t('sidebar.items.mockServer')
    }
  ]


  const calculateItemsToShow = (): number => {
    const fullHeight = windowSize[1];
    const fixedHeight = 46 + 200;
    const result = parseInt(((fullHeight - fixedHeight) / 50) + '') - 1;

    const moreOptions = TOP_BUTTONS.slice(result + 1, TOP_BUTTONS.length)

    ipcRenderer.send('setMoreOptions', JSON.stringify(moreOptions))
    return result;
  }


  const showMoreOptions = () => {
    ipcRenderer.send('moreOptions')
  }



  useEffect(() => setItemsToShow(calculateItemsToShow()), [windowSize])
  return {
    I: {
      TOP_BUTTONS,
      BOTTOM_BUTTONS
    },
    states: {
      itemsToShow
    },
    on: {
      showMoreOptions
    }
  }
}