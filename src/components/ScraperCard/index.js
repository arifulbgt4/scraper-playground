import React from 'react';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';

import { setScraper } from '../../state/ducks/ui/actions';

const ScraperCard = props => {
  const dispatch = useDispatch();
  return (
    <Card
      bodyStyle={{ minHeight: '70px' }}
      title={props.name}
      extra={
        <Button
          onClick={() => dispatch(setScraper({ ...props }))}
          type='primary'
        >
          More
        </Button>
      }
    >
      {props.address && props.address}
    </Card>
  );
};

export default ScraperCard;
