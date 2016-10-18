import React from 'react'
import '../main.css'
import { addQuestion } from '../actions/actionCreator'
import { connect } from 'react-redux'
import Question from './Question'

var QuestionList = React.createClass({
  render(){
    let fullList = this.props.state.map(function(val,i){
      return <Question text={val} key={i}></Question>
    });
    return (
      <div>
        {fullList}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addThis: (question, option1, option2, option3, option4) => {
      dispatch(addQuestion(question, option1, option2, option3, option4))
    }
  }
}
QuestionList = connect(
  mapStateToProps, mapDispatchToProps
)(QuestionList)

export default QuestionList;