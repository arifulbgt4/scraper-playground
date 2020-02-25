import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './ducks';

export default function configureStore() {
  const rootReducer = combineReducers(reducers);

  const composeEnhancers = composeWithDevTools({});
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
