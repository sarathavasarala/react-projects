var Box = React.createClass({
  getInitialState() {
    return {
      clickCount:0
    }
  },
  increment() {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  },
  reset() {
    this.setState({
      clickCount:0
    })    
  },
  render() {
    var msg = this.state.clickCount;
    return (
        <div>
          <div className = "box" onClick = {this.increment}></div>
          <p> This box has been clicked {msg} times. </p>
          <button onClick = {this.reset}> Reset </button>
        </div>
      )
  }
});

ReactDOM.render(<Box />,document.getElementById('react-container'))