import React from 'react';
import { Spin } from 'antd';

import './style.less';

const Fallback = () => {
  return (
    <div className='fallback-spin'>
      <Spin />
    </div>
  );
};

export default Fallback;
