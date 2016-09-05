import _ from 'lodash';
import React, { Component } from 'react';
import TodoListHeader from './todos-list-header';
import TodoListItem from './todos-list-item';

class TodoList extends Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />);
  }
  render() {
    return (
        <table>
          <TodoListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
    );
  }
}

export default TodoList;

