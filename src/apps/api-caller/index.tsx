// MIT License
//
// Copyright (c) 2021 Attorn Studio by qafoori
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


import { FC } from 'react';
import { ipcRenderer } from 'electron';
import { AttornElectronTheme } from '@attorn/electron-theme'

// export const APICaller: FC = (): JSX.Element => {
//   const mockTheme: AttornElectronTheme.Themes[] = [
//     { name: 'mock-theme-0', theme: { accent: 'mock-theme-0', background: 'red' } },
//     { name: 'mock-theme-1', theme: { accent: 'mock-theme-1', background: 'red' } },
//   ]
//   const install = (theme: AttornElectronTheme.Themes) => ipcRenderer.send('install-theme', theme);
//   const uninstall = (theme: AttornElectronTheme.Themes) => ipcRenderer.send('uninstall-theme', theme)
//   const change = (name: string) => ipcRenderer.send('change-theme', name);

//   ipcRenderer.on('change-theme-result', (evt, msg) => console.log(msg))

//   return (<>
//     <button onClick={() => install(mockTheme[0])}>install-mock-theme-0</button>
//     <button onClick={() => install(mockTheme[1])}>install-mock-theme-1</button>
//     <br />
//     <hr />
//     <br />
//     <button onClick={() => uninstall(mockTheme[0])}>uninstall-mock-theme-0</button>
//     <button onClick={() => uninstall(mockTheme[1])}>uninstall-mock-theme-1</button>
//     <br />
//     <hr />
//     <br />
//     <button onClick={() => change('mock-theme-0')}>set-mock-theme-0</button>
//     <button onClick={() => change('mock-theme-1')}>set-mock-theme-1</button>
//     <button onClick={() => change('default-light')}>default-light</button>
//     <button onClick={() => change('default-dark')}>default-dark</button>
//     <button onClick={() => change('invalid-name')}>invalid-name</button>
//   </>)
// }





export const APICaller: FC = (): JSX.Element => {

  // suppose you got this object from a server
  const mockThemes: AttornElectronTheme.Themes[] = [
    { name: 'theme-0', theme: { background: 'red', color: 'black' } },
    { name: 'theme-1', theme: { background: 'black', color: 'red' } },
  ]

  const install = (theme: AttornElectronTheme.Themes) => ipcRenderer.send('install-theme', theme);
  const uninstall = (theme: AttornElectronTheme.Themes) => ipcRenderer.send('uninstall-theme', theme)



  return (<>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <button onClick={() => install(mockThemes[0])}>install theme-0</button>
    <button onClick={() => install(mockThemes[1])}>install theme-1</button>

    <button onClick={() => uninstall(mockThemes[0])}>uninstall theme-0</button>
    <button onClick={() => uninstall(mockThemes[1])}>uninstall theme-1</button>
  </>)
}
