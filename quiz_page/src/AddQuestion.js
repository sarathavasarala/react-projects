import React from 'react'
import SingleAnswerForm from './SingleAnswerForm'
import MultipleAnswerForm from './MultipleAnswerForm'

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
						<div onClick={() => {this.setState({selectionMenu:false, status:"10000"})}}> Single Answer </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"01000"})}}> Multiple Answers (Checkbox Type) </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"00100"})}}> Picture Options </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"00010"})}}> True or False </div>
						<div onClick={() => {this.setState({selectionMenu:false, status:"00001"})}}> Parajumbles </div>
					</div>
				</div>
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
				case "00000":
					return (<div></div>)

				case "10000":
					return <SingleAnswerForm 
								trickleUp={this.trickleUp}
								handleCancel={this.resetForm}/>

				case "01000":
					return <MultipleAnswerForm
								trickleUp={this.trickleUp}
								handleCancel={this.resetForm}/>

				case "00100":
					return this.pictureOptions()

				case "00010":
					return this.trueOrFalse()

				case "00001":
					return this.parajumbles()
				
				default:
				  return "<div>w00t</div>"
			}
		}

	}
})
export default AddQuestion