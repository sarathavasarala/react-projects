var Note = React.createClass({
  edit() {
    alert('clicked on edit');
  },
  remove() {
    alert('clicked on remove');
  },
  render(){
    return (
        <div className = "note">
          {this.props.text}

          <div className = "btn-container">
            <button onClick = {this.edit}> Edit </button>
            <button onClick = {this.remove}> X </button>
          </div>
        </div>
      )
  }
})

ReactDOM.render(<Note text = "whatever"/>,document.getElementById('react-container'))