import React from 'react'
import './main.css'
import Question from './Question'

var QuestionList = React.createClass({
  render(){
    let fullList = this.props.data.map(function(item,i){
      return <Question item={item} key={i}></Question>
    });
    return (
      <div>
        {fullList}
      </div>
    )
  }
})

export default QuestionList;