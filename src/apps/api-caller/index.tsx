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


import { FC, useEffect } from 'react';
import * as Lib from './lib';
import { ipcRenderer } from 'electron'
import * as EVENTS from '../../common/constants/events';
import { Resizable } from '../../../../attorn-react-components/src';
import { API_CALLER_TOOLER_WIDTH } from '../../common/constants/settings';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root-reducer';
import { Global } from '../../store/actions'

export const APICaller: FC = (): JSX.Element => {
  const { get, on } = Lib.H.useAPICaller();
  const { apiCallerToolerWidth } = useSelector((rs: RootState) => rs.globals);
  const dispatch = useDispatch();

  useEffect(() => console.log(apiCallerToolerWidth), [apiCallerToolerWidth]);

  const setTheme = (theme: 'default-dark' | 'default-light') => ipcRenderer.send(EVENTS.CHANGE_THEME, theme);
  const breadcrumbItems: Lib.T.BreadcrumbItem[] = [
    { title: 'my workspace name', onClick: () => { } },
    { title: 'some folder name', onClick: () => { } },
    { title: 'another folder', onClick: () => { } },
    { title: 'and thats it', onClick: () => { } },
    { title: 'my post method', onClick: () => { }, method: 'post' },
  ]


  return (
    <Lib.S.APICaller>

      <Resizable
        h={{ default: 'calc(100vh - 46px)', max: 'calc(100vh - 46px)', min: 'calc(100vh - 46px)' }}
        w={{ default: API_CALLER_TOOLER_WIDTH, min: '30%', max: '90%' }}
        r
        setSize={{ w: size => dispatch(Global.apiCallerToolerWidth(size)) }}
      >
        <div className='tooler'>
          <Lib.C.Breadcrumb items={breadcrumbItems} />
          <Lib.C.URL />
          <Lib.C.Tabs tabs={get.toolerTabs} onTabSelect={on.toolerTabSelect} activeTab={get.toolerTab} />

          <Lib.C.BodyTable />
        </div>
      </Resizable>


      <div className='result' style={{ width: `calc(100% - ${apiCallerToolerWidth}` }}>
        <Lib.C.Tabs tabs={get.resultTabs} onTabSelect={on.resultTabSelect} activeTab={get.resultTab} />
        <button onClick={() => setTheme('default-dark')}>dark</button>
        <button onClick={() => setTheme('default-light')}>light</button>
      </div>


    </Lib.S.APICaller>
  )
}
