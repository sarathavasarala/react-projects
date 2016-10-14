import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/actionCreator'

let AddCommentComponent = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addComment(input.value))
        input.value = ''
      }}>
        <textarea ref={node => {
          input = node
        }}></textarea>
        <button type="submit">
          Add Comment
        </button>
      </form>
    </div>
  )
}

AddCommentComponent = connect()(AddCommentComponent)

export default AddCommentComponent