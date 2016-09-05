import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';

class TodoList extends Component {
  render() {
    return (
        <table>
          <TodoListHeader />
        </table>
    );
  }
}

export default TodoList;

