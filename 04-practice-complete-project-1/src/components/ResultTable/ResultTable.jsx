import React from "react";
import classes from "./ResultTable.module.css";

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});

const createRow = (rowData) => {
	return (
		<tr key={rowData.year}>
			<td>{rowData.year}</td>
			<td>{formatter.format(rowData.savingsEndOfYear)}</td>
			<td>{formatter.format(rowData.yearlyInterest)}</td>
			<td>{formatter.format(rowData.totalInterestGained)}</td>
			<td>{formatter.format(rowData.yearlyContribution)}</td>
		</tr>
	);
}

const Rows = (props) => {
	const data = props.data;
	return (
		<tbody style={{textAlign: 'center'}}>
			{data.map((e) => {
				return createRow(e);
			})}
		</tbody>
	);
}

function ResultTable(props) {
	return (
		<table className={classes.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<Rows data={props.data}/>
		</table>
	);
}

export default ResultTable;