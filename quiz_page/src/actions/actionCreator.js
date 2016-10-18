let id = 1
export const addQuestion = (question, option1, option2, option3, option4) => {
  return {
    type: 'ADD_QUESTION',
    id: id++,
    question,
    option1,
    option2,
    option3,
    option4
  }
}

export const removeQuestion = (id) => {
  return {
    type: 'REMOVE_QUESTION',
    id
  }
}