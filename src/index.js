import React, { Component } from "react";
import { render } from "react-dom";
import TodoItem from "./components/TodoItem.js";
import NewTodo from "./componens/CreateTodo.js";
import "./styles.css";

class App extends Component {
  state = {
    items: [
      "Finish homework",
      "Prepare for next day",
      "Dinner with Josh",
      "Finish leetcode assignments"
    ]
  };

  addTodoItem = text => {
    if (!text || text.length === 0) return;
    this.setState({
      items: [...this.state.items, text]
    });
  };

  render() {
    return (
      <div>
        <div>
          <TodoList items={this.state.items} />
        </div>
        <NewTodo addTodoItem={this.addTodoItem} />
      </div>
    );
  }
}

const TodoList = function({ items }) {
  return items.map((item, i) => <TodoItem key={i} text{item}/>);
};

render(<App />, document.getElementById("root"));
