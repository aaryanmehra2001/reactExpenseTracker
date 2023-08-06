import ExpenseItem from './ExpenseItem';
import './ExpenseListing.css'
import Card from '../UI/Card';
import ExpensesFilter from '../Filter/ExpensesFilter';
import { useState } from 'react';

function ExpenseListing(properties) {
    
    const [yearvalue, setyearValue]= useState('2020')

    function yearValueCollected(yearSelected){
        setyearValue(yearSelected)
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected ={yearvalue} onyYearValue = {yearValueCollected}/>

                {properties.items.map((expense) => (
                <ExpenseItem 
                title = {expense.expenseTitle} 
                cost = {expense.expenseValue} 
                datePurchased = {expense.expsenseDate}/>
                ))} 
            </Card>
        </div>


    );
}

export default ExpenseListing;