import React from "react";
import NewFrom from "./NewFrom";
import './AddExpense.css'
function AddExpense(props) {

    function SaveExpenseData (enteredExpenseData){
        const ExpenseData ={
            ...enteredExpenseData
        }
        props.onAddExpense(ExpenseData)
        //console.log(ExpenseData)
    }

    return (
        <div className="new-expense">
            <NewFrom onSaveExpenseData={SaveExpenseData}/>
        </div>
    );
}

export default AddExpense;