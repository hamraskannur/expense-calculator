import React from "react"
import "./ExpenseDate.css"
function ExpenseDate(props) {
    const month=props.date.toLocaleString("en-Us",{month:"long"})
    const date=props.date.toLocaleString("en-Us",{day:"2-digit"})
    const year=props.date.getFullYear()
  return (
    <div className='expense-date'>
                <div className='xpense-date__month'>{month}</div>
                <div className='expense-date__day'>{date}</div>
                <div className='expense-date__year'>{year}</div>
    </div>
  )
}

export default ExpenseDate
