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


import styled from "styled-components";

export const HeaderContainer = styled.div`
  float: left;
  width: 100%;
  height: 46px;
  background-color: #f3f3f3;

  > svg.logo {
    margin: 6px 10px 6px 6px;
    float: left;
  }
`

export const MenuItem = styled.div<{ hasChildren: boolean }>`
  float: left;
  height: 100%;
  padding: 7px 0;
  font-size: 1.1rem;
  position: relative;

  > p {
    margin: 0;
    padding: 6px 8px;
    cursor: pointer;
    border-radius: 5px;
    float: left;
    width: 100%;
    display: flex;
    align-items: center;
    transition: all 100ms linear;

    > span {
      flex: 1;
    }

    > svg {
      margin: 4px 0 0 3px;
    }

    &:hover {
      background: #e2e2e2;
    }

    &:focus {
      ${({ hasChildren: HC }) => HC ? 'background: #e2e2e2': null};

      & + .children {
        display: block;
      }
    }
  }

  > .children {
    position: absolute;
    left: 0;
    top: 55px;
    z-index: 1;
    background: #ffffff;
    border-radius: 6px;
    box-shadow: 0 0px 6px 0 #0000001a;
    display: none;
  }
`
