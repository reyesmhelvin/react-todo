import React, { Component } from 'react';
import TodoList from './todos-list';
import './App.css';

const tasks = [
  {
    task: "write you next vivid plan for team bora",
    isCompleted: true
  },
  {
    task: "do something about Lee's advice",
    isCompleted: false
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
