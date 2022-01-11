import React, { useState, useCallback, useRef, FC } from 'react';
import * as Lib from '.';
import { HorizontalScrollT, Icon } from "../../../../../attorn-react-components/src";
import { HorizontalScroll } from '../../../../../attorn-react-components/src';
import { Select, Dropdown, Menu, Table } from 'antd';
import { methods } from "../../../common/constants/methods";
import { DownloadOutlined } from '@ant-design/icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';


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
    </HorizontalScroll>
  </Lib.S.Tabs>
)






















































const type = 'DraggableBodyRow';

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }: any) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      const { index: dragIndex } = monitor.getItem() || {} as any;
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item: any) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move', ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];




export const BodyTable: FC = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);

  const components = {
    body: {
      row: DraggableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [data],
  );



  return (
    <Lib.S.BodyTable>
      <DndProvider backend={HTML5Backend}>
        <Table
          columns={columns}
          dataSource={data}
          components={components}
          onRow={(record, index) => ({
            index,
            moveRow,
          }) as any}
          pagination={false}
        />
      </DndProvider>
    </Lib.S.BodyTable>
  )
}