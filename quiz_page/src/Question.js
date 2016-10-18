import React from 'react'
import './main.css'

var Question = React.createClass({
	render(){
		return (
				<div className="quiz-card">
					<div className="quiz-question">{this.props.text.id}. {this.props.text.questionText}</div>
					<div className="option-wrapper">
						<div>{this.props.text.op1}</div>
						<div>{this.props.text.op2}</div>
						<div>{this.props.text.op3}</div>
						<div>{this.props.text.op4}</div>
					</div>
				</div>
			)
	}
});
export default Question;