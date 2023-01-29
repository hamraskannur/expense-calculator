
import React from "react"
import "./ExpenceList.css"
import Expenseltem from "./Expenseltem"
const ExpenceList = (props) => {
    // const Expencecontent = 
    if (props.items.length === 0) {
   return <h2 className="expenses-list__fallback">No Expense fount</h2>
    } else {
        return <ul className="expenses-list">
        {props.items.map(Expense =>
            <Expenseltem
                key={Expense.id}
                title={Expense.title}
                amount={Expense.amount}
                date={Expense.date} />)}
    </ul>
    }

}

export default ExpenceList