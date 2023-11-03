import React from "react";
import "./ExpenseFilter.css"

function ExpenseFilter(props) {

	const years = [2019, 2020, 2021, 2022];

	const dropDownFilter = (event) => {
		props.onChangeFilter(event.target.value);
	}

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select onChange={dropDownFilter}>
					{years.map((e) => {
						return <option key={e} value={e}>{e}</option>;
					})}
				</select>
			</div>
		</div>
	)
}

export default ExpenseFilter;