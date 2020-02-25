import React from 'react';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import ScraperCard from '../../components/ScraperCard';

const ScraperList = ({ itemData }) => {
  return (
    itemData &&
    itemData.map(obj => (
      <Col key={obj.id} sm={6}>
        <ScraperCard {...obj} />
      </Col>
    ))
  );
};

export default ScraperList;
