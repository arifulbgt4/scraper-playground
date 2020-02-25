import types from './types';

export const setScraper = payload => dispatch =>
  dispatch({
    type: types.SET_SCRAPER,
    payload
  });

export const closeModal = () => dispatch =>
  dispatch({
    type: types.CLOSE_SCRAPER
  });

export default { setScraper };
