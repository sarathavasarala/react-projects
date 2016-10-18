import React from 'react'
import { addQuestion } from '../actions/actionCreator.js'
import { connect } from 'react-redux'
import '../main.css'

var AddQuestion = React.createClass({
	getInitialState(){
		return {renderForm:false}
	},

	handleClick(){
		this.setState({renderForm:true})
	},

	renderClickable() {
		return (
				<div className="add-question" onClick={this.handleClick}>
					Click here to add a question
				</div>
			)
	},
	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(addQuestion(this.refs.question.value, this.refs.option1.value, this.refs.option2.value, this.refs.option3.value, this.refs.option4.value));
		this.setState({renderForm:false})
	},

	renderForm(){
		return (
				<form onSubmit={this.handleSubmit}>
					<div className="quiz-card create-card">
						<div className="quiz-question">
							<textarea rows="5" ref="question" placeholder="Enter Question Text..."></textarea>
						</div>
						<div className="option-wrapper">
							<div><input name="option1" ref="option1" type="text" placeholder="Option 1"/></div>
							<div><input name="option2" ref="option2" type="text" placeholder="Option 2"/></div>
							<div><input name="option3" ref="option3" type="text" placeholder="Option 3"/></div>
							<div><input name="option4" ref="option4" type="text" placeholder="Option 4"/></div>
						</div>
					</div>
					<button type="submit"> Add </button> 
				</form>
			)
	},

	render(){
		if(this.state.renderForm){
			return this.renderForm()
		}
		else{
			return this.renderClickable();
		}
	}
});
AddQuestion = connect()(AddQuestion)
export default AddQuestion;