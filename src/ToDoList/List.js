import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  renderListItem = () => {
    return this.props.list?.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
        />
      );
    });
  };

  render() {
    return <ul>{this.renderListItem()}</ul>;
  }
}
