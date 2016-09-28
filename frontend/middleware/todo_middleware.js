import { React } from 'react';
import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  receiveTodos,
  CREATE_TODO,
  RECEIVE_TODO
} from '../actions/todo_actions.js';
import { fetchTodos, createTodo } from '../util/todo_api_util.js';


export const TodoMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  switch(action.type) {
    case REQUEST_TODOS:
      const success = (data) => dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    case CREATE_TODO:
      const success = (data) => receiveTodo(data);
      const error = e => console.log(e);
      createTodo(action.todo, success, error);
    default:
      return next(action);
  }
};
