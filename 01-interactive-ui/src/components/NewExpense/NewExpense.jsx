import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	return (
		<div className="new-expense">
			<ExpenseForm addNewData={props.addNewData}/>
		</div>
	)
};

export default NewExpense;