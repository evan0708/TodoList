import React, { Component } from 'react';

export default class TodoItem extends Component {
  state = {
    done: false,
  }

  toggelDone = () => {
    this.setState({ done: !this.state.done });
  }

  render() {
    const labelCls = this.state.done ? 'done' : '';

    return (
      <div className="todo-item">
        <button
          className="todo-button"
          onClick={this.toggelDone}
        >
          {(this.state.done) ? "Undo" : "Done"}
        </button>
        <div className="todo-label">
          <h1 className={labelCls}>
            {this.props.text}
          </h1>
        </div>
      </div>
    );
  }
}