import { connect } from 'react-redux'
import ExpensesTable from '../dumb/ExpensesTable'
import { removeExpense } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
       state: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => {
      dispatch(removeExpense(id))
    }
  }
}
const ExpenseShow = connect(
  mapStateToProps, mapDispatchToProps
)(ExpensesTable)

export default ExpenseShow