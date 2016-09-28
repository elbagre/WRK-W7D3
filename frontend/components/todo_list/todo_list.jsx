import React from 'react';
import TodoListItem from './todo_list_item.jsx'

class TodoList extends React.Component{

  componentDidMount () {
    this.props.requestTodos();
  }

  render () {
    const { todos } = this.props;
    const list = todos.map((todo, idx) => {
        return <TodoListItem key={idx} todo={todo}/>
      });
    return(
      <ul>
      { list }
      </ul>
    );
  }

}

export default TodoList;
