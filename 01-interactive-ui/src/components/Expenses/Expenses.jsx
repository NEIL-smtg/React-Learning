import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart"

function Expenses(props) {

	const data = props.data;
	const [previewData, updateData] = React.useState(data);

	const onChangeFilter = (year) => {
		updateData(() => {
			return data.filter((e) => {	
				return e.date.getFullYear().toString() === year;
			});
		});
	}

	return (
		<Card className="expenses">
			<ExpenseFilter onChangeFilter={onChangeFilter}/>
			<ExpensesChart expenses={previewData}/>
			{previewData.length ? previewData.map((e) => {
				return <ExpenseItem
					key={e.id}
					id={e.id}
					item={e.title}
					amount={e.amount}
					date={e.date}
				/>
			}) : <p style={{color: 'white', textAlign: 'center'}}>No Expenses Found.</p>}
		</Card>
	);
}

export default Expenses;