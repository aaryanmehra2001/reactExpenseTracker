import ExpenseListing from "./components/Expenses/ExpenseListing";
import AddExpense from "./components/AddExpenses/AddExpense";
import React,{useState} from "react";

var DummyExp = [
  { expenseTitle: 'Car Insaurance', expenseValue: 767.90, expsenseDate: new Date(2021, 9, 12) },
  { expenseTitle: 'Milk', expenseValue: 2.40, expsenseDate: new Date(2023, 1, 1) },
  { expenseTitle: 'Rent', expenseValue: 850.0, expsenseDate: new Date(2023, 4, 15) },
  { expenseTitle: 'Groceries', expenseValue: 154.11, expsenseDate: new Date(2023, 5, 28) }
]

function App() {
  const [expenseList, setExpenseList] = useState(DummyExp)

  const AddExpensehandler=(expenses)=>{
    setExpenseList((prevExp) =>{
      return [expenses, ...prevExp];
    });

    //console.log ('in App.js')
    //console.log(expenses)

  }
  return (
    <div>
  
      <AddExpense onAddExpense = {AddExpensehandler}> Add an Expense</AddExpense> 
      <ExpenseListing items ={expenseList}></ExpenseListing>
      
    </div>  
  );
}

export default App;
