import React from 'react'
import '../dumb/App.css';
import '../dumb/bootstrap.min.css';

let ExpensesTable = ({ state }) => {
  let tableRows=state.map(function(val, i){
    return (<tr key={val.id}>
      <td> {val.name} </td>
      <td> {val.amount} </td>
      <td> {val.date} </td>
      <td> {val.expenseType} </td>
    </tr>)
  })
  return (
    <div className="custom-table table-responsive">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}

export default ExpensesTable

