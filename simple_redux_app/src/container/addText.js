import React from 'react'
import { connect } from 'react-redux'
import { addText } from '../actions'
import { addRandomString } from '../actions'

let addText = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => {
          input = node
        }} />
      <button onSubmit={e => {
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>do your thang!</button>
    </div>
  )
}
addText = connect()(addText)

export default addText