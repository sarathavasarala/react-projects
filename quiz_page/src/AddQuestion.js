import React from 'react'
let id = 1
var AddQuestion = React.createClass({
	getInitialState(){
		return {errorMsg:false}
	},
	handleSubmit(e){
		e.preventDefault()
		if(this.refs.question.value.trim().length === 0
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
			this.refs.question.value = this.refs.one.value = this.refs.two.value = this.refs.three.value = this.refs.four.value = ""	
			this.setState({errorMsg:false})
		}		
	},
	render(){
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
					</div>
				</form>
			)
	}
})
export default AddQuestion