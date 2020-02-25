import React, { useState, useEffect } from 'react';
import { Modal, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../state/ducks/ui/actions';

import './style.less';

const ScraperModal = () => {
  const [open, setOpen] = useState(false);
  const [visibleMobile, setVisibleMobile] = useState(false);
  const [visibleMail, setVisibleMail] = useState(false);
  const dispatch = useDispatch();
  const visible = useSelector(store => store.ui.modal);
  const data = visible.data;
  const onClose = () => {
    setVisibleMail(false);
    setVisibleMobile(false);
    setOpen(false);
    dispatch(closeModal);
  };
  useEffect(() => {
    setOpen(visible.modal);
  }, [visible]);
  return (
    <Modal
      destroyOnClose={true}
      maskClosable={true}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      visible={open}
      title={[
        data.id && <div key='id'>ID: {data.id} </div>,
        data.hash && <div key='hash'>Hash: {data.hash} </div>
      ]}
    >
      <ul className='modal-con'>
        {data.number && (
          <li>
            <Icon type='phone' />
            <span onClick={setVisibleMobile}>
              {visibleMobile ? data.number : 'Click to view'}
            </span>
          </li>
        )}
        {data.email && (
          <li>
            <Icon type='mail' />
            <span onClick={setVisibleMail}>
              {visibleMail ? data.email : 'Click to view'}
            </span>
          </li>
        )}
      </ul>
    </Modal>
  );
};

export default ScraperModal;
