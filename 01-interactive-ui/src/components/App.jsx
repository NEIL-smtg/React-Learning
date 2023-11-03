import React from "react";
import "./Expenses/Expenses.css";
import NewExpense from "./NewExpense/NewExpense";
import Expenses from "./Expenses/Expenses";
import expenses from "../expense"

function App () {
	const [expenseArr, updateExpense] = React.useState(expenses);
	
	const addNewData = (data) => {
		updateExpense((prev) => {
			return [...prev, data];
		})
	}

	return (
		<div>
			<NewExpense addNewData={addNewData}/>
			<Expenses data={expenseArr}/>
		</div>
	)
}

export default App;
