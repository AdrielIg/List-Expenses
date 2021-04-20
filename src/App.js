import { useState } from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSE = [
  { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2020, 2, 28) },
  { id: "e2", title: "Health Insurance", amount: 329.99, date: new Date(2021, 2, 12) },
  { id: "e3", title: "Food", amount: 167.50, date: new Date(2021, 7, 7) },
  { id: "e4", title: "Netflix", amount: 10.52, date: new Date(2019, 4, 22) }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      console.log(expense.date.getFullYear())
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses listExpenses={expenses} />
    </div>
  );
}

export default App;
