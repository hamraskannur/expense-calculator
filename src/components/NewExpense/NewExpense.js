import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
function NewExpense(props) {
  const[Addform,setAddform] =useState(false)

   const saveExpenseDataHandler=(enteredExpense)=>{
       const expenseDta={
        ...enteredExpense,
        id:Math.random().toString}
       props.onAddExpence(expenseDta)
   }

   const startAddExpence=()=>{
    setAddform(true)
   }
   const stopAddExpence=()=>{
    setAddform(false)
   }
  return (
    <div className='new-expense'>
      {!Addform && <button onClick={startAddExpence} >Add New Expense</button>}
     {Addform && <ExpenseForm onsaveExpense={saveExpenseDataHandler} onCancel={stopAddExpence}/>}      
    </div>
  )
}

export default NewExpense
