import React from "react"
import Card from "./Card"
import ExpenseDate from "./ExpenseDate.js"
import "./Expenseltem.css"
function Expenseltem(props) { 
    return (
        <li>
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
        </li>
    )
}

export default Expenseltem