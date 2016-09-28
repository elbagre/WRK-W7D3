import React from 'react';

class TodoListItem extends React.Component {

  render () {
    debugger
    return (
        <li>{ this.props.todo.title }</li>
    )
  }

}

export default TodoListItem;
