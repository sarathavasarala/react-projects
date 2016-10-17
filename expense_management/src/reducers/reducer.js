const reducer = (state=[], action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				{
					id : action.id,
					name: action.name,
					date: action.date,
					amount: action.amount,
					expenseType: action.expenseType
				}
			]

		case 'REMOVE_EXPENSE':
				return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
		default:
			return state
	}
}

export default reducer