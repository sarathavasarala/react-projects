import React from 'react'
import './main.css'

var Question = React.createClass({
	render(){
		return (
				<div className="quiz-card">
					<div className="quiz-question">{this.props.item.id}/ {this.props.item.question}</div>
					<div className="option-wrapper">
						<div>{this.props.item.options[0]}</div>
						<div>{this.props.item.options[1]}</div>
						<div>{this.props.item.options[2]}</div>
						<div>{this.props.item.options[3]}</div>
					</div>
				</div>
			)
	}
});


export default Question;