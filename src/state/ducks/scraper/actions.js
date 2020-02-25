import types from './types';

export const getScraper = (start, end) => dispatch =>
  dispatch({
    type: types.GET_SCRAPER,
    start,
    end
  });

export default { getScraper };
