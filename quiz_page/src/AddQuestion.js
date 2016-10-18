import React from 'react'
import './main.css'

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


	renderForm(){
		return (
				<div className="quiz-card create-card">
					<div className="quiz-question">
						<textarea rows="5" placeholder="Enter Question Text..."></textarea>
					</div>
					<div className="option-wrapper">
						<div><input type="text" placeholder="Option 1"/></div>
						<div><input type="text" placeholder="Option 2"/></div>
						<div><input type="text" placeholder="Option 3"/></div>
						<div><input type="text" placeholder="Option 4"/></div>
					</div>
				</div>
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
export default AddQuestion;