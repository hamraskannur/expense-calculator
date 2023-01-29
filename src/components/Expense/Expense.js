import React, { useState } from 'react'
import "./Expense.css"
import Card from './Card'
import ExpensesFilter from './ExpensesFilter.js'
import ExpenceList from './ExpenceList.js'
import ExpenceChart from './ExpenceChart'

function Expense(props) {
    const [filteryear, setfilteryear] = useState("2020")
    const filterChangeHandler = (selectedYear) => {
        setfilteryear(selectedYear);
    }

    const filterExpence = props.items.filter(Expense => {
        return Expense.date.getFullYear().toString() === filteryear
    })


    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteryear} Onchangefilter={filterChangeHandler} />
            <ExpenceChart expense={filterExpence}/>
           <ExpenceList items={filterExpence}/>
        </Card>
    )
}

export default Expense
