var reducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUESTION':
			return [
					...state,
				{
					id: action.id,
					question:action.question,
					option1: action.option1,
					option2: action.option2,
					option3: action.option3,
					option4: action.option4
				}
			]
		default:
			return state
	}
}

export default reducer