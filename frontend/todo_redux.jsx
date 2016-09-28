import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { allTodos } from './reducers/selector.js';
import { requestTodos } from './actions/todo_actions.js';
import { Root } from './components/root.jsx';

const store = configureStore()
window.store = store
window.allTodos = allTodos
window.requestTodos = requestTodos

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(Root(store), document.getElementById('content'))
})
