import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);






///This is what we had before we ran those ugly tests and had to modify this to make it more testable
// import React from 'react';
// import {connect} from 'react-redux';
// import ExpenseForm from './ExpenseForm';
// import {addExpense} from '../actions/expenses';

// const AddExpensePage = (props) => ( //we implicitly return so hense no render method mentioned
//     <div>
//         This is from my add expense page
//         <h1>Add Expense</h1>    
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );

// export default connect()(AddExpensePage);