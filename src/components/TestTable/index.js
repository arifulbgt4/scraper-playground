import React from 'react';
import axios from 'axios';
import { Layout, Table } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const { Content } = Layout;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Title',
    dataIndex: 'title'
  }
];

const TestTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos').then(res =>
      setData(res.data)
    );
  }, []);

  const onSelectChange = selectedRowKeys => setSelectedRowKeys(selectedRowKeys);
  const hasSelected = selectedRowKeys.length > 0;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };

  return (
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </Content>
  );
};

export default TestTable;
