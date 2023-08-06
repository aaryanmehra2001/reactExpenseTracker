import React, { useState } from 'react';
import './NewForm.css'

function NewFrom(props) {

    const [EnteredTitle, setEnteredTitle] = useState('')
    const [EnteredAmount, setEnteredamount] = useState('')
    const [EnteredDate, setEnteredDate] = useState('')

    function enteredTitleHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountHandler(event) {
        setEnteredamount(event.target.value);
    }

    function dateExpHandler(event) {
        setEnteredDate(event.target.value);
    }

    function resetForm() {
        setEnteredTitle('');
        setEnteredamount('');
        setEnteredDate('')

    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expsenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date (EnteredDate)
        };
       // console.log(expsenseData.date)
        props.onSaveExpenseData(expsenseData);
        resetForm();
    }
    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Expense Name: </label>
                    <input
                        type="text"
                        value={EnteredTitle}
                        onChange={enteredTitleHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Cost: </label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        value={EnteredAmount}
                        onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Date: </label>
                    <input type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={EnteredDate}
                        onChange={dateExpHandler} />
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

}

export default NewFrom;