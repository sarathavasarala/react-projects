import React from 'react'
import '../main.css'

var Question = React.createClass({
	render(){
		return (
				<div className="quiz-card">
					<div className="quiz-question">{this.props.text.id}. {this.props.text.question}</div>
					<div className="option-wrapper">
						<div>{this.props.text.option1}</div>
						<div>{this.props.text.option2}</div>
						<div>{this.props.text.option3}</div>
						<div>{this.props.text.option4}</div>
					</div>
				</div>
			)
	}
});


export default Question;