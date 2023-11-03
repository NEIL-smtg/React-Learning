import React from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
	const [data, setData] = React.useState({
		title: '',
		amount: '',
		date: '2019-01-01'
	});
	
	const handleFormChanges = (e) => {
		const {name, value} = e.target;

		setData((prev) => {
			return {
				...prev,
				[name]: value
			}
		});
	}

	const submit = (event) => {
		setData(() => {
			return {
				title: '',
				amount: '',
				date: '2019-01-01'
			}
		});
		data.date = new Date(data.date);
		data.id = Math.random().toString();
		props.addNewData(data);
		event.preventDefault();
	}

	return (
		<form onSubmit={submit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input autoComplete="off" required={true} value={data.title} name="title" type="text" onChange={handleFormChanges}></input>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input autoComplete="off" required={true} value={data.amount} name="amount" type="text" min="0.01" step="0.01" onChange={handleFormChanges}></input>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input value={data.date} required={true} name="date" type="date" min="2019-01-01" max="2022-12-31" onChange={handleFormChanges}></input>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">submit</button>
			</div>
		</form>
	);
};

export default ExpenseForm;