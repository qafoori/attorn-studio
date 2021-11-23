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
import * as Lib from './lib';
import { Explorer } from '../../../../@attorn-react-components/src';
import { apiCallerExplorerThings } from '../../../../@attorn-react-components/src/ui-components/explorer/lib/typing';

export const APICaller: FC = (): JSX.Element => {

  return (
    <Lib.S.APICaller>
      <Explorer
        id='myExplorer'
        className='asdasd'
        height='calc(100vh - 46px)'
        minWidth='180px'
        data={apiCallerExplorerThings}
        styling={{
          background: 'var(--background_150)',
          optionHoverBackground: 'var(--foreground)',
          optionsColor: 'var(--foreground_color)',
          optionsBottomBorder: 'var(--foreground)'
        }}
      />
    </Lib.S.APICaller>
  )
}
