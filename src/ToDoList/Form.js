import React, { Component } from "react";

export default class Form extends Component {
  state = {
    todo: {
      inputValue: "",
      id: "",
    },
  };

  handleOnChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let id = Date.now().toString().slice(0, 10);
    this.setState({
      todo: {
        inputValue: value,
        id,
      },
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(this.state.todo);
          this.setState({
            todo: {
              inputValue: "",
              id: "",
            },
          });
        }}
      >
        <input
          type="text"
          name="inputValue"
          value={this.state.todo.inputValue || ""}
          onChange={this.handleOnChange}
          required
        ></input>
        <button type="submit">Create</button>
      </form>
    );
  }
}
