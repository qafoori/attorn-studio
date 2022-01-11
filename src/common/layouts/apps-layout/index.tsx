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


import { FC, useEffect } from "react"
import * as Lib from './lib';
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { apiCallerExplorerThings } from '../../../../../attorn-react-components/src/ui-components/explorer/lib/typing';
import { Explorer } from '../../../../../attorn-react-components/src';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { Global } from '../../../store/actions';
import { EXPLORER_DEFAULT_WIDTH } from '../../constants/settings';

export const AppsLayout: FC = ({ children }): JSX.Element => {
  const { on, states } = Lib.H.useAppsLayout();
  const dispatch = useDispatch();
  const { explorerWidth } = useSelector((rs: RootState) => rs.globals);

  useEffect(() => console.log(explorerWidth), [explorerWidth]);

  return (
    <Lib.S.AppsLayoutContainer>
      <Header />
      <Sidebar />
      <div id='app'>

        <Explorer
          id='myExplorer'
          className='asdasd'
          height='calc(100vh - 46px)'
          minWidth='180px'
          width={EXPLORER_DEFAULT_WIDTH}
          onReload={() => console.log('asdasd')}
          data={apiCallerExplorerThings}
          onAddNew={async (name, type) => on.addNew()}
          onRightClick={on.rightClick}
          contextHandlerState={states.menuItemCaller.val}
          onChangeItems={console.log}
          onErrors={console.log}
          beforeDelete={(id, name, type) => confirm(`are u sure?\nid: ${id}\nname: ${name}\ntype: ${type}`)}
          styling={{}}
          resizableProps={{ setSize: { w: size => dispatch(Global.explorerWidth(size)) } }}
        />

        <div className="appChild">
          {children &&
            children
          }
        </div>
      </div>
    </Lib.S.AppsLayoutContainer>
  )
}
