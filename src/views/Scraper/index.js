import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScraperMopdal from '../../components/ScraperMopdal';

import ScraperList from '../ScraperList';
import Pagination from '../Pagination';
import Fallback from '../../components/Fallback';

const Scraper = ({
  match: {
    params: { index }
  }
}) => {
  const loadLimit = 4;
  const pageIndex = index ? index : 0;
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(parseInt(pageIndex) + loadLimit);
  const [itemData, setItemData] = useState([]);

  const data = useSelector(store => store.scraperState.scraper);
  function itemIncr() {
    setItem(pre => pre + 4);
  }
  const filterData = async () => {
    await itemIncr();
    await setItemData(data.slice(pageIndex, item));
    setLoading(false);
  };
  useEffect(() => {
    filterData();
  }, [pageIndex]);
  return (
    <>
      <ScraperMopdal />
      <Row>
        {loading && <Fallback />}
        <ScraperList itemData={itemData} />
      </Row>
      <Row>
        <Pagination
          setLoading={setLoading}
          setItem={itemIncr}
          item={item}
          filterData={filterData}
        />
      </Row>
    </>
  );
};

export default withRouter(Scraper);
