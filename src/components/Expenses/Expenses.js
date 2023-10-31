import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filterYear, setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filterYear} />
            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            ))}
        </Card>
    );
}

export default Expenses;