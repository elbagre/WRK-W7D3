import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestTodos: () => dispatch(requestTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
