import React from 'react'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'

var App = React.createClass({
	render(){
		return (
				<div className="wrapper">
					<QuestionList />
					<AddQuestion />
				</div>
			)
	}
});
export default App