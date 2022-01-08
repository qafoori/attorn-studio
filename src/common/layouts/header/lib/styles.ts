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


import styled from "styled-components"
import * as Lib from '.'
import { createQuery as cq } from "../../../constants/media-queries" 


export const HeaderContainer = styled.div`
  float: left;
  width: 100%;
  height: 46px;
  background-color: var(--foreground);
  display: flex;
  align-items: center;

  > .left {
    width: auto;

    > svg.logo {
      margin: 6px 10px 6px 6px;
      float: left;
    }
  }

  > .right {
    flex: 1;
  }

  ${cq(1150, 'max')} {
    .searchBox {
      border-radius: 5px;
      margin: 7px 0 7px 11px;
      padding: 8px 11px;

      > p {
        display: none;
      }
    }
  }
`

export const MenuItem = styled.div<Pick<Lib.T.MenuItemProps, 'special'> & { hasChildren: boolean }>`
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
    background-color: ${({ special: S }) => S ? 'var(--accent_10)' : 'unset'};
    color: ${({ special: S }) => S ? 'var(--accent)' : 'var(--foreground_color)'};

    > span {
      flex: 1;
      color: ${({ special: S }) => S ? 'var(--accent)' : 'var(--foreground_color)'};
    }

    > svg {
      margin: 4px 0 0 3px;
    }

    &:hover {
      background-color: ${({ special: S }) => S ? 'var(--accent_05)' : 'var(--background_50)'};
    }

    &:focus {
      ${({ hasChildren: HC }) => HC ? 'background: var(--background_50)' : null};

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
    background: var(--foreground);
    border-radius: 6px;
    box-shadow: 0 0px 6px 0 #0000001a;
    display: none;
  }
`


export const SearchBox = styled.div`
  float: left;
  padding: 7px 15px;
  background: var(--background_50);
  margin: 7px 0 7px 20px;
  border-radius: 8px;
  color: var(--foreground_color);
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  > p {
    margin: 0 0 0 10px;
    flex: 1;
  }

  > svg, > p {
    opacity: .7;
  }
`

export const StatusesBox = styled.div`
  float: right;
  padding: 0 5px 0 0;

  > .profile {
    padding: 3px 6px;
    height: 35px;
    background-color: var(--accent_10);
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    float: right;

    > img {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: 1px solid var(--accent_10);
    }

    > svg {
      margin: 0 0 0 6px;
    }
  }

  > .sync {
    padding: 3px 10px;
    cursor: pointer;
    height: 35px;
    background-color: var(--accent_20);
    border-radius: 5px;
    float: right;
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .upgrade {
    padding: 3px 6px;
    height: 35px;
    background-color: var(--accent_10);
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    float: right;

    > span {
      color: var(--foreground_color);
      margin: 0 4px 0 0;
    }
  }
`
