import React from 'react'
import ReactDOM from 'react-dom'
import QuestionList from './QuestionList'
import AddQuestion from './AddQuestion'
import './main.css'


var QuizPage = React.createClass({
  render(){
    return (
        <div className="wrapper">
          <QuestionList/>
          <AddQuestion/>
        </div>
      )
  }
});

ReactDOM.render(
  <QuizPage />,
  document.getElementById('root')
);

