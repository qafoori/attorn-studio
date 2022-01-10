import { FC } from "react";
import * as Lib from '.';
import { HorizontalScrollT, Icon } from "../../../../../attorn-react-components/src";
import { HorizontalScroll } from '../../../../../attorn-react-components/src';
import { Select, Dropdown, Menu } from 'antd';
import { methods } from "../../../common/constants/methods";
import { DownloadOutlined } from '@ant-design/icons';

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


export const URL: FC = () => {
  const senderMenu = (
    <Menu onClick={() => { }}>
      <Menu.Item key="1" icon={<DownloadOutlined color="white" />}>
        Send & Download
      </Menu.Item>
    </Menu>
  )

  return (
    <Lib.S.URL>
      <div className="method-selector">
        <Select
          showSearch
          optionFilterProp="key"
          defaultValue={'post'}
          listHeight={methods.length * 32}
        >
          {methods.map(({ name, color }) =>
            <Select.Option key={name}>
              <span style={{ color, textTransform: 'uppercase' }}>{name}</span>
            </Select.Option>
          )}
        </Select>
      </div>

      <input
        type="text"
        placeholder="Your request URL here..."
      />

      <div className="sender">
        <Dropdown.Button onClick={() => { }} overlay={senderMenu}>
          Send
        </Dropdown.Button>
      </div>
    </Lib.S.URL>
  )
}


export const Tabs: FC<Lib.T.TabsProps> = ({ tabs, onTabSelect, activeTab }) => (
  <Lib.S.Tabs>
    <HorizontalScroll>
      {tabs.map(tab =>
        <div
          key={tab.key}
          className={`${tab.key} ${activeTab === tab.key}`}
          onClick={() => onTabSelect(tab.key)}
        >

          {tab.menu &&
            <Select
              showSearch
              defaultValue={tab.menu[tab.menu.length - 1].key}
              onChange={tabKey => onTabSelect(tabKey)}
              disabled={activeTab !== tab.key}
              listHeight={tab.menu.length * 32}
            >
              {tab.menu.map(menu =>
                <Select.Option key={menu.key}>
                  {menu.name}
                </Select.Option>
              )}
            </Select>
          }
          {!tab.menu &&
            <span>
              {tab.name}
            </span>
          }

        </div>
      )}

      {/* <div /> */}
    </HorizontalScroll>
  </Lib.S.Tabs>
)

