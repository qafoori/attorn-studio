import { FC } from "react";
import * as Lib from '.';
import { Icon } from "../../../../../attorn-react-components/src";
import { HorizontalScroll } from '../../../../../attorn-react-components/src';
import { Select } from 'antd';
import { methods } from "../../../common/constants/methods";

export const Breadcrumb: FC<Lib.T.BreadcrumbProps> = ({ items }) => (
  <Lib.S.Breadcrumb>
    <HorizontalScroll
      scrollbar={{ handler: { back: 'var(--foreground)', hover: 'var(--foreground_hover)' } }}
      className="hs"
    >
      <div onClick={() => { }} className="items">
        <Icon name="white-back-logo" size={20} className="logo" />
        <p>Attorn</p>
        <span className="chevron">
          <Icon name="chevron-right" color="var(--foreground_color)" size={10} />
        </span>
      </div>

      {items.map(({ onClick, title, method }, index) =>
        <div key={index} onClick={onClick} className="items">
          {method &&
            <span className="method">
              <Icon name={`method-${method}`} size={12} />
            </span>
          }
          <p>{title}</p>

          {index < items.length - 1 &&
            <span className="chevron">
              <Icon name="chevron-right" color="var(--foreground_color)" size={10} />
            </span>
          }
        </div>
      )}
    </HorizontalScroll>
  </Lib.S.Breadcrumb>
)


export const URL: FC = () => (
  <Lib.S.URL>

    <div className="method-selector">
      <Select open showSearch>
        {methods.map(({ name }, index) =>
          <Select.Option key={index}>
            {name}
          </Select.Option>
        )}
      </Select>
    </div>

    <input type="text" />
  </Lib.S.URL>
)
