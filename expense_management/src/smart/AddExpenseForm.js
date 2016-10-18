import React from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { addExpense } from '../actions/actions'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../dumb/bootstrap.min.css'
import '../dumb/App.css'

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
    return {
              selectedValue:"",
              startDate:moment()
            }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state.startDate);
    this.props.dispatch(addExpense(this.refs.name.value.trim(), this.state.startDate.format("DD/MMM/YYYY").trim(), this.refs.amount.value.trim(), this.state.selectedValue.label))
    this.refs.name.value = this.refs.amount.value  = "";
    this.setState({selectedValue:""});
  },
  handleSelectChange: function(value){
    this.setState({selectedValue:value})
  },
  handleDateChange: function(date) {
    this.setState({
      startDate: date
    });
  },
  render() {
    return (
        <div className="mb-20 clearfix mt-20">
          <form className="form-inline custom-form" onSubmit={this.handleSubmit}>
            <div className="col-xs-3">
              <input className="form-control" placeholder="Expense Name" type="text" ref="name" name="name" required/>
            </div>
            <div className="col-xs-3">
              <DatePicker
              dateFormat="DD/MMM/YYYY"
              placeholderText='Select a Date!'
              required={true}
              selected={this.state.startDate}
              onChange={this.handleDateChange} />
            </div>
            <div className="col-xs-3">
              <input className="form-control" placeholder="Amount" type="number" ref="amount" name="amount" required/>
            </div>
            <div className="col-xs-3">
              <Select
                  name="form-field-name"
                  options={options}
                  value={this.state.selectedValue}
                  onChange={this.handleSelectChange}
                  placeholder="Expense Type"
                  searchable={false}
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

