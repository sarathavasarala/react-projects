import React, { Component } from 'react';
import './App.css';

var TodoItem = React.createClass({
  getInitialState() {
    return {
            checklistArray:[]
           }
  },
  handleClick() {
    var arrayvar = this.state.checklistArray;
    arrayvar.push(this.refs.myInput.value);
    this.setState({ checklistArray: arrayvar });
    this.refs.myInput.value = ""
  },
  render() {
    var items = this.state.checklistArray
    return (
            <div>
              <h1> Your Todo List </h1>
                {items.map(function(item, index){
                  return <div className="todo-item" key={ index }>
                            <label>
                              <span>{item}</span>
                            </label>
                          </div>;
                })}
              <input ref="myInput" type="text" />
              <button onClick={this.handleClick}> Add </button>
            </div>
           )
  }
});

export default TodoItem;
