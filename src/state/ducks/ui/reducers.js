import { combineReducers } from 'redux';
import types from './types';

const modal = (state = { modal: false, data: {} }, action) => {
  switch (action.type) {
    case types.SET_SCRAPER:
      const sttObj = {
        modal: true,
        data: action.payload
      };
      return { ...sttObj };
    case types.CLOSE_SCRAPER:
      const sttObj2 = {
        modal: false,
        data: {}
      };
      return { ...sttObj2 };
    default:
      return state;
  }
};

const scraperReducerModal = combineReducers({ modal });

export default scraperReducerModal;
