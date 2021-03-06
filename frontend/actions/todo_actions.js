export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const CREATE_TODO = "CREATE_TODO";

export const RECEIVE_TODO = "RECEIVE_TODO";

export const createTodo = () => ({
  type: CREATE_TODO
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
