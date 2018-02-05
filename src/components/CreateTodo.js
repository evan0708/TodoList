import React, { Component } from 'react';

export default class CreateTodo extends Component {
  state = {
    text: ""
  }

  addTodo = () => {
    this.props.addTodoItem(this.state.text);
  }

  changeText = (e) => {
    this.setState({ text: e.targe.value });
  }

  render() {
    return (
      <div className="create-todo">
        <input
          type="text"
          placeholder="New Todo Name"
          onChange={this.changeText}
        />
        <button
          className="todo-button"
          onClick={this.addTodo}
        >
          Add
        </button>
      </div>
    );
  }
}