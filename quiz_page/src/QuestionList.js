import React from 'react'
import './main.css'
import Question from './Question'

var data = [
  {
    id:"1", 
    questionText:"What is the capital of India?",
    op1: "Delhi",
    op2: "Chennai",
    op3: "Kolkata",
    op4: "Mumbai"
  },
  {
    id:"2", 
    questionText:"What is the capital of Pakistan?",
    op1: "Islamabad",
    op2: "Abottabad",
    op3: "Hyderabad",
    op4: "Golconda"
  }
];


const QuestionList = () => {
  let fullList = data.map(function(val,i){
    console.log(val);
    return <Question text={val} key={i}></Question>
  });
  return (
    <div>
      {fullList}
    </div>
    )
};


export default QuestionList;