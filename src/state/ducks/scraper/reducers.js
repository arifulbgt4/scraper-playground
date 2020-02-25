import { combineReducers } from 'redux';
import types from './types';
import data from '../../../sample-data';

const scraper = (state = data, action) => {
  switch (action.type) {
    case types.GET_SCRAPER:
      return state.slice(action.start, action.end);

    default:
      return state;
  }
};

const scraperReducer = combineReducers({ scraper });

export default scraperReducer;
