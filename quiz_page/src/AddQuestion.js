import React from 'react'
import SingleAnswerForm from './SingleAnswerForm'
var AddQuestion = React.createClass({
	getInitialState(){
		return {
				editing:false,
				clickMenu: true,
				selectionMenu:false,
				status:"000000"
			   }
	},


	resetForm(){
		this.setState({editing:false, clickMenu: true, selectionMenu:false, status:"000000"})
	},

	trickleUp(formData){
		this.props.handleSubmit(formData)
		this.resetForm()
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
					return <SingleAnswerForm 
								trickleUp={this.trickleUp}
								handleCancel={this.resetForm}/>

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