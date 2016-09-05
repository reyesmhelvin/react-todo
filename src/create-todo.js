import React, { Component } from 'react';

class CreateTodo extends Component {
  render() {
    return (
       <form onSubmit={this.handleCreate.bind(this)}>
         <input type="text" placeholder="What i am going to do?" ref="createInput" />
         <button>Create</button>
       </form>
    );
  }
  handleCreate(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}

export default CreateTodo;

