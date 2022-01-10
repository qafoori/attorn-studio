import { useState } from 'react';
import * as Lib from '.';

export const useAPICaller = () => {
  const [toolerTab, setToolerTab] = useState<Lib.T.TabKeys>('BDY');
  const [resultTab, setResultTab] = useState<Lib.T.TabKeys>('RES');

  const toolerTabs: Lib.T.Tab[] = [
    {
      name: 'Body',
      key: 'BDY',
      menu: [
        { key: 'MLT', name: 'Multipart Form' },
        { key: 'GQL', name: 'GraphQl Query' },
        { key: 'URL', name: 'Form URL Encoded' },
        { key: 'JSC', name: 'JavaScript' },
        { key: 'HTM', name: 'HTML' },
        { key: 'JSN', name: 'JSON' },
        { key: 'XML', name: 'XML' },
        { key: 'YML', name: 'YAML' },
        { key: 'EDN', name: 'EDN' },
        { key: 'PLN', name: 'Plain' },
        { key: 'BIN', name: 'Binary' },
        { key: 'OTR', name: 'Other' },
        { key: 'NBD', name: 'No Body', no: true },
      ]
    },
    {
      name: 'Auth',
      key: 'AUT',
      menu: [
        { key: 'INA', name: 'Inherit Auth' },
        { key: 'API', name: 'API Key' },
        { key: 'BAU', name: 'Basic Auth' },
        { key: 'DIG', name: 'Digest Auth' },
        { key: 'OA1', name: 'OAuth 1.0' },
        { key: 'OA2', name: 'OAuth 2.0' },
        { key: 'MIC', name: 'Microsoft NTLM' },
        { key: 'AWS', name: 'AWS IAM v4' },
        { key: 'BEA', name: 'Bearer Token' },
        { key: 'HWK', name: 'Hawk' },
        { key: 'AKA', name: 'Akamai EdgeGrid' },
        { key: 'ATL', name: 'Atlassian ASAP' },
        { key: 'NET', name: 'Netrc File' },
        { key: 'NAU', name: 'No Auth', no: true },
      ]
    },
    { name: 'URL Query', key: 'QUE' },
    { name: 'Header', key: 'HDR' },
    { name: 'Doc', key: 'DOC' }
  ]


  const resultTabs: Lib.T.Tab[] = [
    { key: 'RES', name: 'Response' },
    { key: 'HEA', name: 'Header' },
    { key: 'COO', name: 'Cookie' },
    { key: 'TLI', name: 'Timeline' },
    { key: 'CON', name: 'Console Logs' },
    { key: 'RAW', name: 'Raw' },
  ]


  const toolerTabSelect = (tabKey: Lib.T.TabKeys) => {
    setToolerTab(tabKey);
  }

  const resultTabSelect = (tabKey: Lib.T.TabKeys) => {
    setResultTab(tabKey);
  }


  return {
    get: {
      toolerTabs,
      toolerTab,
      resultTabs,
      resultTab
    },
    on: {
      toolerTabSelect,
      resultTabSelect
    },
    set: {
      toolerTab: setToolerTab,
      resultTab: setResultTab
    }
  }
}