import styled from 'styled-components';
import * as Lib from '.';

export const Sidebar = styled.div`
  float: left;
  width: 50px;
  background: var(--foreground);
  height: calc(100vh - 46px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > .top {
    float: left;
    width: 100%;
    flex: 1;
  }

  > .bottom {
    width: 100%;
    float: left;
    height: 150px;
    padding-top: 50px;
  }
`;

export const SidebarButton = styled.div<Pick<Lib.T.Button, 'active'>>`
  float: left;
  width: 50px;
  height: 50px;
  padding: 5px;
  cursor: pointer;
  position: relative;

  > div {
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ active: A }) => A ? 'var(--accent_10)' : 'transparent'};
    border-radius: 6px;
    border: ${({ active: A }) => '3px solid '.concat(A ? 'var(--accent_05)' : 'transparent')};
  }

  > span {
    background-color: var(--foreground);
    position: absolute;
    left: 55px;
    top: 0;
    bottom: 0;
    white-space: nowrap;
    margin: auto;
    height: 30px;
    padding: 7px 12px;
    border-radius: 5px;
    transition: all 0ms linear;
    transition-delay: 0ms;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    > div {
      background-color: var(--accent_10);
      border: 3px solid var(--accent_05);
    }
    
    > span {
      opacity: 1;
      visibility: visible;
      transition-delay: 500ms;
    }
  }
`;