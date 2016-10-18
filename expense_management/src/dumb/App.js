import React from 'react'
import AddExpense from '../smart/AddExpenseForm'
import ExpenseShow from '../smart/ExpenseShow'
import './App.css';

const App = () => (
  <div className="wrapper">
	<div className="heading">
		<div>Expense Tracker!</div>
	</div>
	<div className="container-fluid">
		<div className="col-lg-12">
			<div className="container">
				<AddExpense />
				<ExpenseShow />
			</div>
		</div>
	</div>
  </div>
)

export default App
