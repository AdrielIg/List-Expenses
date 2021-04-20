import { useState } from "react"
import Card from "../UI/Card";

import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)

    }



    const filteredExpenses = props.listExpenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })



    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter
                    selectedFilter={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                {/* Si lo primero es true, se ejecuta lo segundo */}
                <ExpensesList listExpenses={filteredExpenses} />


            </Card>
        </div>
    )
}
export default Expenses