import { ADD_TEXT, ADD_RANDOM_STRING } from '../actions/kriya'
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TEXT:
      return [
      	...state,
      	{
		  text: action.text
		}
      ]

    case ADD_RANDOM_STRING:
    	return [
    		...state,
    		{
    			text: action.text + "oola oo la la"
    		}
    	]

    default:
      return state
  }
}

export default reducer;