import styled from "styled-components";

export const APICaller = styled.div`
  display: flex;
  flex: 1;

  .tooler {
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--background_border);
  }

  .result {
    flex: 1;
  }
`;


export const Breadcrumb = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid var(--background_border);

  > .hs {
    height: 36px;
    padding: 0 10px;

    > .items {
      cursor: pointer;
      font-size: 11pt;
      margin: 0 7px 0 0;
      padding: 7px 0;
      align-items: center;
      display: flex;
      color: var(--foreground_color);

      > .logo {
        margin: 0 5px 0 0;
        height: 100%;
      }

      > p {
        margin: 0;
        display: inline-block;
      }

      > .method {
        margin: 4px 5px 0 0;
      }

      > .chevron {
        margin: 2px 0 0 1px;
      }

      &:hover {
        color: white;

        > .chevron > svg > path {
          fill: white;
        }
      }
    }
  }
`;


export const URL = styled.div`
  display: flex;
  height: 40px;

  > .method-selector {
    > .ant-select {
      width: 120px;
      height: 100%;

      > .ant-select-selector {
        height: 100%;

        .ant-select-selection-item {
          padding: 5px 0;
          font-size: 11.5pt;
        }
      }
    }
  }

  > input {
    flex: 1;
    outline: none !important;
    background: var(--foreground_50);
    border: none;
    padding: 0 12px 4px 12px;
    font-size: 12pt;
    color: var(--foreground_color);
    min-width: 0px;

    &::placeholder {
      color: var(--foreground_placeholder);
    }
  }

  > .sender {
    width: 120px;
    height: 100%;

    > .ant-dropdown-button {
      width: 100%;
      height: 100%;

      > button {
        height: 100%;
        background-color: var(--accent_30);

        &:hover {
          background-color: var(--accent_40);
        }

        &:nth-child(1) {
          flex: 1;
        }
        &:nth-child(2) {
          width: 35px;
          border-color: #114276;
        }
      }
    }
  }
`;


const ACTIVE_TAB_BORDER = '1px solid var(--background_border)';
export const Tabs = styled.div`
  width: 100%;
  height: 50px;
  float: left;
  display: flex;

  > div {
    width: 100%;

    > div {
      width: 100px;
      display: block;
      float: left;
      height: 100%;
      cursor: pointer !important;
      border: 1px solid transparent;

      &.true {
        border-left: ${ACTIVE_TAB_BORDER};
        border-right: ${ACTIVE_TAB_BORDER};
      }

      &.false {
        border-bottom: ${ACTIVE_TAB_BORDER};
      }

      &:first-child {
        &.true {
          border-left-color: transparent !important;
        }
      }

      * {
        cursor: pointer !important;
      }

      .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background-color: var(--background) !important;
      }

      > .ant-select {
        width: 100%;
        height: 100%;

        > div {
          width: 100% !important;
          height: 100% !important;

          input, .ant-select-selection-item {
            height: 100% !important;
            padding: 9px 0 !important;
            font-size: 11.5pt;
          }
        }
      }

      > span {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      &.BDY {
        width: 175px;
      }

      &.AUT {
        width: 165px;
      }
    }

    > div:last-child {
      cursor: default !important;
      flex: 1;
      border-bottom: ${ACTIVE_TAB_BORDER};
    }
  }
`;

