import React from 'react'
let id = 1
var AddQuestion = React.createClass({
	getInitialState(){
		return {
				errorMsg:false,
				editing:false,
				clickMenu: true,
				selectionMenu:false,
				status:"000000"
			   }
	},


	resetForm(){
		this.setState({
						errorMsg:false,
						editing:false,
						clickMenu: true,
						selectionMenu:false,
						status:"000000"
					})
	},


	renderClickable(){
		return(
				<div className="add-question" 
					 onClick={() => (this.setState({clickMenu:false, selectionMenu:true}))}>
					Click here to add a question
				</div>
			)
	},


	showQuestionTypes(){
		return(
				<div className="add-question open">
					<div className="question-types">
						<div onClick={() => {this.setState({selectionMenu:false, status:"100000"})}}> Single Answer </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"010000"})}}> Multiple Answers (Checkbox Type) </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"001000"})}}> Picture Options </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"000100"})}}> True or False </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"000010"})}}> Fill in the Blanks </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"000001"})}}> Parajumbles </div>
					</div>
				</div>
			)
	},


	singleAnswer(){
		return(				
				<form onSubmit={this.singleAnswerSubmit}>
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
		else{
			var formData = {
							id: id++,
							type: 1,
							question: this.refs.question.value.trim(),
							options:[this.refs.one.value.trim(), this.refs.two.value.trim(), this.refs.three.value.trim(), this.refs.four.value.trim()]
						}
			this.props.handleSubmit(formData)
			this.refs.question.value = this.refs.one.value = this.refs.two.value = this.refs.three.value = this.refs.four.value = ""
			this.resetForm()
		}		
	},
	checkboxAnswers(){
		return(
				<div>checkboxes</div>
			)
	},
	pictureOptions(){
		return(
				<div>pictureoptions</div>
			)
	},
	trueOrFalse(){
		return(
				<div>trueorfalse</div>
			)
	},
	blanks(){
		return(
				<div>blanks</div>
			)
	},	
	parajumbles(){
		return(
				<div> parajumbles </div>
			)
	},
	
	render(){
		if(this.state.clickMenu){
			return this.renderClickable()
		}
		else if(this.state.selectionMenu){
			return this.showQuestionTypes()
		}
		else{
			switch (this.state.status) {
				case "000000":
					return (<div></div>)

				case "100000":
					return this.singleAnswer()

				case "010000":
					return this.checkboxAnswers()

				case "001000":
					return this.pictureOptions()

				case "000100":
					return this.trueOrFalse()

				case "000010":
					return this.blanks()

				case "000001":
					return this.parajumbles()
				
				default:
				  return "<div>w00t</div>"
			}
		}

	}
})
export default AddQuestion