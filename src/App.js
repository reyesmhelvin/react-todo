import React, { Component } from 'react';
import CreateTodo from './create-todo.js';
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
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });

    this.setState({
      todos: this.state.todos
    });
  } 
}

export default App;
