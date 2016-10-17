import React from 'react'
import '../dumb/App.css';
import '../dumb/bootstrap.min.css';

let ExpensesTable = ({ state, onRemove }) => {
  let tableRows=state.map(function(val, i){
    return (<tr key={val.id}>
      <td> {val.name} </td>
      <td> {val.amount} </td>
      <td> {val.date} </td>
      <td> {val.expenseType} </td>
      <td> <div onClick={() => onRemove(i)} className="btn btn-sm btn-primary"> Delete </div> </td>
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
            <th>Action</th>
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

