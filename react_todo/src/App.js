import React, { Component } from 'react';
import './App.css';

var data = [];

var AppHeading = React.createClass({
  render() {
    return (
            <div>
              <h2> Your To-do List </h2>
            </div>
           )
  }
});

var TodoList = React.createClass({
  getInitialState() {
    return {data: data}
  },
  add() {
    var newData = this.state.data;
    newData.push(this.refs.myInput.value);
    this.setState({data:newData});
    this.refs.myInput.value="";
  },
  handleKeys(e) {
    if(e.keyCode===13){
      this.add();
      this.refs.myInput.value="";
    }
  },
  render() {
    var listItems = this.state.data.map(function(val, i){
                      return <TodoItem key={i}>{val}</TodoItem>
                    });
    return (
              <div>
                <input type="text" onKeyDown={this.handleKeys} ref="myInput"/>
                <button onClick={this.add}> Add </button>
                {listItems}   
              </div>
            ) 
  }
});

var TodoItem = React.createClass({
  getInitialState() {
    return {checked:false}
  },
  handleStateChange() {
    this.setState({checked:!this.state.checked})
  },
  render() {
    return (
              <div className="todo-item">
                <label>
                  <input type="checkbox" checked={this.state.checked} onChange={this.handleStateChange} />
                  <span className={this.state.checked?"strike":"default"}>{this.props.children}</span>
                </label>
              </div>
            )
  }
});

var TodoApp = React.createClass({
  render() {
    return (
              <div>
                <AppHeading/>
                <TodoList/>
              </div>
           )
  }
});

export default TodoApp;
