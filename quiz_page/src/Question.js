import React from 'react'
import './main.css'

var Question = React.createClass({
	getInitialState(){
		return {answer: this.props.item.answer}
	},
	render(){
		var state = parseInt(this.state.answer)
		return (
				<div className="quiz-card">
					<div className="quiz-question">{this.props.item.question}</div>
					<div className="option-wrapper">
						{this.props.item.options.map(function(val,i){
							return <div className={state === i ? 'answerContainer' : ''}
										key={i}>
										{val}
										<span className="pull-right">
											<i className="fa fa-check fa-fw"></i>
										</span>
									</div>
						})}
					</div>
				</div>
			)
	}
});
export default Question;