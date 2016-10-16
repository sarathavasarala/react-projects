import React from 'react'
import AddExpense from '../smart/AddExpenseForm'
import ExpenseShow from '../smart/ExpenseShow'
import './App.css';

const App = () => (
  <div className="container-fluid">
  	<div className="col-lg-8">
    	<AddExpense />
    	<ExpenseShow />
    </div>
    <div className="col-lg-4">
    	
    </div>
  </div>
)

export default App
