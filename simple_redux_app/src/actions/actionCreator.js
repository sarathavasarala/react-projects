let nextId = 0;
export const addComment = (comment) => {
  return {
    type:'ADD_COMMENT',
    id:nextId++,
    comment:comment  
  }
}