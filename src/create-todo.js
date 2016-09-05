import React, { Component } from 'react';

class CreateTodo extends Component {
  render() {
    return (
       <form>
         <input type="text" placeholder="What i am going to do?" />
         <button>Create</button>
       </form>
    );
  }
}

export default CreateTodo;

