import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidbar';
import MainHeader from './components/MainHeader';
import TestTable from '../../components/TestTable';

class Dashboard extends React.Component {
  state = { collapsed: false };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <Layout>
          <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout style={{ minHeight: '100vh' }}>
              <MainHeader toggle={this.toggle} collapsed={collapsed} />
              <TestTable />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
