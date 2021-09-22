import React, { Component } from "react";

export default class ListItem extends Component {
  state = {
    onEdit: false,
    editValue: {
      inputValue: this.props.item.inputValue,
      id: this.props.item.id,
    },
  };

  myRef = React.createRef();

  handleEditValue = (e) => {
    const { value, id } = e.target;
    this.setState({
      editValue: {
        inputValue: value,
        id,
      },
    });
  };

  onEdit = () => {
    this.setState({
      onEdit: true,
    });
  };

  handleCancel = () => {
    this.props.editTodo(this.state.editValue);
  };

  handleSave = () => {
    const { editValue } = this.state;
    if (editValue === "") {
      this.setState({
        editValue: this.props.item,
      });
    } else {
      this.props.editTodo(editValue);
    }
    this.setState({
      onEdit: false,
    });
  };

  render() {
    const { item, deleteTodo } = this.props;
    if (this.state.onEdit) {
      return (
        <li>
          <input
            type="text"
            value={this.state.editValue.inputValue}
            name="editValue"
            id={this.state.editValue.id}
            onChange={this.handleEditValue}
          ></input>
          {item.inputValue}
          <div className="row">
            <i
              className="fa fa-save"
              title="Save"
              onClick={this.handleSave}
            ></i>
            <i
              className="fa fa-times"
              title="Cancel"
              onClick={this.handleCancel}
            ></i>
          </div>
        </li>
      );
    } else {
      return (
        <li ref={this.myRef}>
          {item.inputValue}
          <div className="row">
            <i className="fa fa-pencil" title="Edit" onClick={this.onEdit}></i>
            <i
              className="fa fa-trash"
              title="Delete"
              onClick={() => {
                this.myRef.current.className = "active";
                setTimeout(() => {
                  deleteTodo(item.id);
                }, 250);
              }}
            ></i>
          </div>
        </li>
      );
    }
  }
}
