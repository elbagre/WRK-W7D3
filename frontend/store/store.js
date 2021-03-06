import { createStore } from 'redux';
import { RootReducer } from '../reducers/root_reducer.js';
import { MasterMiddleware } from '../middleware/master_middleware.js';

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, MasterMiddleware);
};

export default configureStore
