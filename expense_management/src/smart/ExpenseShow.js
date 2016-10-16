import { connect } from 'react-redux'
import ExpensesTable from '../dumb/ExpensesTable'


const mapStateToProps = (state) => {
  return {
       state: state
  };
}

const ExpenseShow = connect(
  mapStateToProps
)(ExpensesTable)

export default ExpenseShow