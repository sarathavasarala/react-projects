import React from 'react'
import { v4 } from 'node-uuid'



var MultipleAnswerForm = React.createClass({
	getInitialState(){
		return {
					errorMsg:false,
					selectAnswer:false,
					answers:[false, false, false, false]
				}
	},
	multipleAnswerSubmit(e){
		e.preventDefault()
		if(this.refs.question.value.trim().length === 0
		|| this.refs.one.value.trim().length === 0
		|| this.refs.two.value.trim().length === 0
		|| this.refs.three.value.trim().length === 0
		|| this.refs.four.value.trim().length === 0
		){
			this.setState({errorMsg:true})			
		}
		else if(this.state.answers[0] === false 
				&& this.state.answers[1] === false
				&& this.state.answers[2] === false
				&& this.state.answers[3] === false){
			this.setState({selectAnswer: true})
		}
		else{
			var formData = {
							id: v4(),
							type: 2,
							question: this.refs.question.value.trim(),
							options:[this.refs.one.value.trim(), this.refs.two.value.trim(), this.refs.three.value.trim(), this.refs.four.value.trim()],
							answer: this.state.answers
						}
			this.props.trickleUp(formData)
			this.clearAll()
		}
	},
	clearAll(){
		this.refs.question.value = this.refs.one.value = this.refs.two.value = this.refs.three.value = this.refs.four.value = ""
		this.setState({
						errorMsg:false, 
						selectAnswer:false,
						answers:[false, false, false, false]
					})
	},
	formCancel(e){
		e.preventDefault()
		this.clearAll
		this.props.handleCancel()
	},
	render() {
		return(				
				<form onSubmit={this.multipleAnswerSubmit}>
					<div className="quiz-card create-card">
						<div className={this.state.errorMsg?"show-error":"hide"}>
							One or more fields in the form below were not filled! Please check and try again.
						</div>
						<div className={this.state.selectAnswer?"show-error":"hide"}>
							Please select an answer!
						</div>
						<div className="quiz-question">
							<textarea rows="5" ref="question" placeholder="Enter Question Text..." required></textarea>
						</div>
						<div className="option-wrapper">
							<div>
								<input name="option1" ref="one" type="text" placeholder="Option 1" required/>
								<div className="answerPicker">
									<label>
										<input type="checkbox" 
												name="answers" 
												checked={this.state.answers[0]} 
												value="0" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[
																			!this.state.answers[0],
																			this.state.answers[1],
																			this.state.answers[2],
																			this.state.answers[3]
																		]
																	})
																}
														}/>
										<span>Correct Answer</span>
									</label>
								</div>
							</div>
							<div>
								<input name="option2" ref="two" type="text" placeholder="Option 2" required/>
								<div className="answerPicker">
									<label>
										<input type="checkbox" 
												name="answers" 
												checked={this.state.answers[1]} 
												value="1" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[
																			this.state.answers[0],
																			!this.state.answers[1],
																			this.state.answers[2],
																			this.state.answers[3]
																		]
																	})
																}
														}/>
										<span>Correct Answer</span>
									</label>
								</div>
							</div>
							<div>
								<input name="option3" ref="three" type="text" placeholder="Option 3" required/>
								<div className="answerPicker">
									<label>
										<input type="checkbox" 
												name="answers" 
												checked={this.state.answers[2]} 
												value="2" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[
																			this.state.answers[0],
																			this.state.answers[1],
																			!this.state.answers[2],
																			this.state.answers[3]
																		]
																	})
																}
														}/>
										<span>Correct Answer</span>
									</label>
								</div>
							</div>
							<div>
								<input name="option4" ref="four" type="text" placeholder="Option 4" required/>
								<div className="answerPicker">
									<label>
										<input type="checkbox" 
												name="answers" 
												checked={this.state.answers[3]} 
												value="3" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[
																			this.state.answers[0],
																			this.state.answers[1],
																			this.state.answers[2],
																			!this.state.answers[3]
																		]
																	})
																}
														}/>
										<span>Correct Answer</span>
									</label>
								</div>
							</div>
						</div>
						<button type="submit"> Add </button> 
						<button onClick={this.formCancel}> Cancel </button>
					</div>
				</form>
			)
	}	
});

export default MultipleAnswerForm