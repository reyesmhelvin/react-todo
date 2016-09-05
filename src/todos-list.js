import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default TodoList;

