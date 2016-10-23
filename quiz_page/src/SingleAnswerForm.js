import React from 'react'
import { v4 } from 'node-uuid'



var SingleAnswerForm = React.createClass({
	getInitialState(){
		return {
					errorMsg:false,
					selectAnswer:false,
					answerSet:"",
					answers:[0,0,0,0]
				}
	},
	singleAnswerSubmit(e){
		e.preventDefault()
		if(this.refs.question.value.trim().length === 0
		|| this.refs.one.value.trim().length === 0
		|| this.refs.two.value.trim().length === 0
		|| this.refs.three.value.trim().length === 0
		|| this.refs.four.value.trim().length === 0
		){
			this.setState({errorMsg:true})			
		}
		else if(this.state.answerSet.length === 0){
			this.setState({selectAnswer: true})
		}
		else{
			var formData = {
							id: v4(),
							type: 1,
							question: this.refs.question.value.trim(),
							options:[this.refs.one.value.trim(), this.refs.two.value.trim(), this.refs.three.value.trim(), this.refs.four.value.trim()],
							answer: this.state.answerSet
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
						answerSet:"",
						answers:[0,0,0,0]
					})
	},
	formCancel(e){
		e.preventDefault()
		this.clearAll
		this.props.handleCancel()
	},
	render() {
		return(				
				<form onSubmit={this.singleAnswerSubmit}>
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
										<input type="radio" 
												name="answers" 
												checked={this.state.answers[0]===1} 
												value="0" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[1,0,0,0], 
																		answerSet: e.target.value
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
										<input type="radio" 
												name="answers" 
												checked={this.state.answers[1]===1} 
												value="1" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[0,1,0,0], 
																		answerSet: e.target.value
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
										<input type="radio" 
												name="answers" 
												checked={this.state.answers[2]===1} 
												value="2" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[0,0,1,0], 
																		answerSet: e.target.value
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
										<input type="radio" 
												name="answers" 
												checked={this.state.answers[3]===1} 
												value="3" 
												onChange={
															(e) => 
																{
																	this.setState({
																		answers:[0,0,0,1], 
																		answerSet: e.target.value
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

export default SingleAnswerForm