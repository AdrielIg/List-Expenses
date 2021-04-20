import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = (props) => {

    /* Aca usamos == y no === ya que es de diferente tipo */
    if (props.listExpenses == 0) {
        return <h2 className="expenses-list__fallback">Found no expenses. </h2>
    }

    return <ul className="expenses-list">
        {
            props.listExpenses.map((expense) => {
                return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
            })
        }
    </ul>
}

export default ExpensesList

