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


import { createGlobalStyle } from "styled-components";
import UbuntuRegular from '../fonts/Ubuntu-Regular.ttf';
import UbuntuMedium from '../fonts/Ubuntu-Medium.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face { font-family: u-reg; src: url('${UbuntuRegular}') }
  @font-face { font-family: u-med; src: url('${UbuntuMedium}') }

  :root {
    color-scheme: dark;
    --f-reg: u-reg, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --f-med: u-med, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    font-family: var(--f-reg);
    user-select: none;
  }

  body {
    display: block;
    margin: 0;
    min-width: 800px;
    overflow-y: hidden;
    min-height: 100vh;
    max-height: 100vh;
  }

`;
