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

import { ATTORN_MIT_LICENSE as L } from '../license/MIT';

export const LogLicense = () => {
  console.log(`%c${L.title}`, 'background: #1d1b1b; color: #ec4d37; font-size: 20px; padding: 10px 30px; border-radius: 10px; font-family: arial');
  console.log(`%c${L.copyright}\n${L.description}\n${L.condition1}\n${L.condition2}`, 'background: #1d1b1b; color: #dbdbdb; font-size: 12px; padding: 10px 30px; font-weight: 700; line-height: 2; font-family: arial');
}
