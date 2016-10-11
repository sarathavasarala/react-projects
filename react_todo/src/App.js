import React, { Component } from 'react';
import './App.css';

var data = [];

var AppHeading = React.createClass({
  render() {
    return (
            <div>
              <h2 className="text-xs-center"> Todo List </h2>
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
    }
  },
  render() {
    var listItems = this.state.data.map(function(val, i){
                      return <TodoItem key={i}>{val}</TodoItem>
                    });
    return (
              <div>
                <div className="input-group">
                  <input type="text" className="form-control" onKeyDown={this.handleKeys} ref="myInput" placeholder="type your tasks here..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.add}>Add</button>
                  </span>
                </div>
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
              <div className="app-container">
                <AppHeading/>
                <TodoList/>
              </div>
           )
  }
});

export default TodoApp;
