let id = 0;
export const addExpense = (name, date, amount, expenseType) => {
  return {
    type: 'ADD_EXPENSE',
    id: id++,
    name: name,
    date: date,
    amount: amount,
    expenseType: expenseType
  }
}

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id
  }
}