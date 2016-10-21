import React from 'react'
import ReactDOM from 'react-dom'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'
import './main.css'

var data = []

var Quiz = React.createClass({
	getInitialState(){
		return {data: data}
	},
	handleChildData(formData){
		var newData = [...this.state.data, formData]
		this.setState({data:newData})
	},
	render(){
		return (
			<div className="wrapper">
				<QuestionList data={this.state.data}/>
				<AddQuestion handleSubmit={this.handleChildData}/>
			</div>
			)
	}
})

ReactDOM.render(<Quiz/>, document.getElementById('root'))