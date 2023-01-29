import "./ExpenseForm.css"
import React,{useState} from "react";
const ExpenseForm = (props) => {

   const [enteredTitle,setenteredTitle] =useState("")
   const [enteredAmount,setenteredAmount]=useState("")
   const [enteredDate,setenteredDate]=useState("")

const TitleChangeHandler=(event)=>{
    setenteredTitle(event.target.value)
}

const AmountChangeHandler=(event)=>{
    setenteredAmount(event.target.value)
}

const DateChangeHandler=(event)=>{
    setenteredDate(event.target.value)
}

const submitHandler=(event)=>{
    event.preventDefault()
    const expenseDta={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
    }
    setenteredTitle("")
    setenteredAmount("")
    setenteredDate("")
    props.onCancel()
    props.onsaveExpense(expenseDta)
}
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" value={enteredAmount} onChange={AmountChangeHandler}  min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" value={enteredDate}  onChange={DateChangeHandler} min="2020-01-01" max="2023-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}


export default ExpenseForm


