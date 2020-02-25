import React from 'react';
import { Layout, Icon, Button } from 'antd';

const { Header } = Layout;

const MainHeader = ({ toggle, collapsed }) => {
  return (
    <Header
      style={{
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)'
      }}
    >
      <Icon
        className='trigger'
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggle}
        style={{ fontSize: '20px', marginLeft: '-30px' }}
      />
      <Button type='danger'>Logout</Button>
    </Header>
  );
};

export default MainHeader;
