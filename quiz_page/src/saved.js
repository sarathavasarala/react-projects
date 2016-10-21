import React from 'react'
let id = 1
var AddQuestion = React.createClass({
	getInitialState(){
		return {errorMsg:false, editing:false}
	},
	handleSubmit(e){
		e.preventDefault()
		if(this.refs.question.value.trim().length === 0
		|| this.refs.one.value.trim().length === 0
		|| this.refs.two.value.trim().length === 0
		|| this.refs.three.value.trim().length === 0
		|| this.refs.four.value.trim().length === 0
		){
			this.setState({errorMsg:true})			
		}
		else{
			var formData = {
							id: id++,
							question: this.refs.question.value.trim(),
							options:[this.refs.one.value.trim(), this.refs.two.value.trim(), this.refs.three.value.trim(), this.refs.four.value.trim()]
						}
			this.props.handleSubmit(formData)
			this.resetForm()
		}		
	},
	resetForm(){
		this.refs.question.value = this.refs.one.value = this.refs.two.value = this.refs.three.value = this.refs.four.value = ""
		this.setState({errorMsg:false, editing:false})
	},
	handleCreate(){
		this.setState({editing:true})
	},
	renderClickable(){
		return(
				<div className="add-question" onClick={this.handleCreate}>
					Click here to add a question
				</div>
			)
	},
	renderForm(){
		return(				
				<form onSubmit={this.handleSubmit}>
					<div className="quiz-card create-card">
						<div className={this.state.errorMsg?"show-error":"hide"}>
							One or more fields in the form below were not filled! Please check and try again.
						</div>
						<div className="quiz-question">
							<textarea rows="5" ref="question" placeholder="Enter Question Text..." required></textarea>
						</div>
						<div className="option-wrapper">
							<div><input name="option1" ref="one" type="text" placeholder="Option 1" required/></div>
							<div><input name="option2" ref="two" type="text" placeholder="Option 2" required/></div>
							<div><input name="option3" ref="three" type="text" placeholder="Option 3" required/></div>
							<div><input name="option4" ref="four" type="text" placeholder="Option 4" required/></div>
						</div>
						<button type="submit"> Add </button> 
						<button onClick={(e) => {e.preventDefault(); this.resetForm()}}> Cancel </button>
					</div>
				</form>
			)
	},
	render(){
		if(this.state.editing){
			return this.renderForm()
		}
		else{
			return this.renderClickable()
		}
	}
})
export default AddQuestion