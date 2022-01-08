import styled from "styled-components";

export const APICaller = styled.div`

  .tooler {
    width: 100%;
    height: 100%;
    border-right: 1px solid var(--background_border);
  }

  .response {

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

  > .method-selector {


    > .ant-select {
      width: 100px;
    }
  }
`;

