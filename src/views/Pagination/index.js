import React from 'react';
import { Col, Button } from 'antd';
import { withRouter } from 'react-router-dom';

import './style.less';

const Pagination = ({ item, filterData, history, setLoading }) => {
  function pageReload() {
    location.reload();
  }

  function setLocation(index) {
    history.push(index);
    pageReload();
  }

  function setFirstPage() {
    setLocation('/');
  }

  function nextLoad() {
    const leftItem = item - 4;
    const path = '/'.concat(leftItem.toString());
    setLocation(path);
  }

  function loadFirst() {
    setLoading(true);
    setTimeout(() => {
      filterData();
    }, 100);
  }

  function loadLazy() {
    setLoading(true);
    setTimeout(() => {
      filterData();
    }, 5000);
  }

  return (
    <Col sm={24} className='pagin'>
      <Button onClick={pageReload} type='danger'>
        Reload Current Page
      </Button>
      <Button onClick={setFirstPage} type='danger'>
        Navigate First Page
      </Button>
      <Button onClick={nextLoad}>Navigate Next 4 items</Button>
      <Button onClick={loadFirst}>Quick Load More 4 Items</Button>
      <Button onClick={loadLazy}>Lazy Load More 4 Items</Button>
    </Col>
  );
};

export default withRouter(Pagination);
