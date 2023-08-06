import './DatePurchased.css';

function DatePurchased(properties) {
    try {
        const day = properties.datePurchased.toLocaleString('en-US', { day: "2-digit" });
        const month = properties.datePurchased.toLocaleString('en-US', { month: "long" });
        const year = properties.datePurchased.getFullYear()


        return (
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>

        );
    }
   
    catch (error) {
            console.error("THE ERROR IS: ", error);
            return <div className='expense-date'>Invalid Date</div>;
        }
    }
    export default DatePurchased;