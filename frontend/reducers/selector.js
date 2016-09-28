export const allTodos = ( state ) => {
  if (!state) return [];
  const keys = Object.keys(state.todos);
  return keys.map( key => state.todos[key]);
};
