import { combineReducers } from 'redux';
import todos from './todos_reducer.js';

export const RootReducer = combineReducers({ todos });
