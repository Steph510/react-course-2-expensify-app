import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);


////The below is the code before we added testing

// import React from 'react';
// import { connect } from 'react-redux';
// import ExpenseListItem from './ExpenseListItem';
// import selectExpenses  from '../selectors/expenses';

// export const ExpenseList = (props) => ( //here we use export so we can access this component in our tests without it being connected to the state
//     <div>
//         <h1>Expense List</h1>
//           {props.expenses.map((expense) => {
//             return <ExpenseListItem key={expense.id} {...expense} />;
//           })}          
//     </div>
// );

// const mapStateToProps = (state) => {
//     return {
//         expenses: selectExpenses(state.expenses, state.filters)
//     };
// };

// export default connect(mapStateToProps)(ExpenseList);

