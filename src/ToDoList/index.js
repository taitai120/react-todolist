import React, { Component } from "react";
import "./index.css";
import Form from "./Form";
import List from "./List";

export default class ToDoList extends Component {
  state = {
    list: [],
  };

  addTodo = (todo) => {
    let list = [...this.state.list];
    list.push(todo);
    this.setState({
      list,
    });
  };

  deleteTodo = (id) => {
    let list = [...this.state.list];
    let index = list.findIndex((todo, index) => todo.id === id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    this.setState({
      list,
    });
  };

  editTodo = (todo) => {
    let list = [...this.state.list];
    let index = list.findIndex((item, index) => item.id == todo.id);
    if (index !== -1) {
      list[index] = todo;
    }
    this.setState({
      list,
    });
  };

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.list));
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("data"));
    if (data !== null) {
      this.setState({
        list: data,
      });
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div className="app">
        <Form addTodo={this.addTodo} />
        <h1 className="head">To do list</h1>
        <List
          list={list}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
        <div>
          <h1 className="foot">You have {list.length || "not"} things to do</h1>
        </div>
      </div>
    );
  }
}
