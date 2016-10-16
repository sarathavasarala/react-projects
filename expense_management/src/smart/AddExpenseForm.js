import React from 'react'
import { connect } from 'react-redux'
import { addExpense } from '../actions/actions'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import '../dumb/bootstrap.min.css';
import '../dumb/App.css';

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
var options = [
    { value: 'food', label: 'Food' },
    { value: 'travel', label: 'Travel' },
    { value: 'electricity', label: 'Electricity' },
    { value: 'rent', label: 'Rent' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'other', label: 'Other' }
];

let AddExpense = React.createClass({
  getInitialState(){
    return {selectedValue:""}
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.dispatch(addExpense(this.refs.name.value.trim(), this.refs.date.value.trim(), this.refs.amount.value.trim(), this.state.selectedValue.label))
    this.refs.name.value = this.refs.date.value = this.refs.amount.value  = "";
    this.setState({selectedValue:""});
  },
  componentDidMount: function() {
    this.refs.date.value = new Date().toDateInputValue();
  },
  handleSelectChange: function(value){
    this.setState({selectedValue:value})
  },
  render() {
    return (
        <div className="mb-20 clearfix mt-20">
          <form className="form-inline custom-form" onSubmit={this.handleSubmit}>
            <div className="col-xs-3">
              <input className="form-control" placeholder="Expense Name" type="text" ref="name" name="name" required/>
            </div>
            <div className="col-xs-3">
              <input className="form-control" placeholder="Date" type="date" ref="date" name="date" required/>
            </div>
            <div className="col-xs-3">
              <input className="form-control" placeholder="Amount" type="text" ref="amount" name="amount" required/>
            </div>
            <div className="col-xs-3">
              <Select
                  name="form-field-name"
                  ref="expenseType"
                  options={options}
                  value= {this.state.selectedValue}
                  onChange={this.handleSelectChange}
                  placeholder="Expense Type"
              />
            </div>
            <div className="col-xs-12 mt-10 padding-reset">
              <button className="btn btn-primary" type="submit"> Add </button>
            </div>
          </form>
        </div>
      )
  }
})

AddExpense = connect()(AddExpense)
export default AddExpense

