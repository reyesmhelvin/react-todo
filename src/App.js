import React, { Component } from 'react';
import TodoList from './todos-list';
import './App.css';

const todos = [
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
  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
