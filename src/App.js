import React,{useState} from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENCE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses,setexpenses] = useState(DUMMY_EXPENCE)
  const AddExpenceHandler = (Newexpense) => {
    setexpenses((prevexpenses)=>{
      return [Newexpense, ...expenses]
    } )
  }

  return (
    <div className="App">
      <NewExpense onAddExpence={AddExpenceHandler} />
      <Expense items={expenses} />

    </div>
  );
}

export default App;
