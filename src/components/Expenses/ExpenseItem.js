import './ExpenseItem.css'
import DatePurchased from './DatePurchased';
import Card from '../UI/Card';
import React, {useState} from 'react';
import { click } from '@testing-library/user-event/dist/click';


function ExpenseItem(properties){


    return (
        <Card className="expense-item">
            <DatePurchased datePurchased = {properties.datePurchased}/>
            <div className="expense-item__description">
                <h2>{properties.title}</h2>
                <div className="expense-item__price">${properties.cost}</div>
            </div>
            
        </Card>
        
    );
}


export default ExpenseItem;