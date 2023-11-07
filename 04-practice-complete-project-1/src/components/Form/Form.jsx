import {React, useState} from "react";
import classes from "./Form.module.css"

function Form(props) {

	const [inputData, setInput] = useState({
		currentSavings: '',
		yearlySavings: '',
		interest: '',
		years: ''
	});

	const calculateHandler = (event) => {
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...
	
		const yearlyData = []; // per-year results
	
		let currentSavings = +inputData['currentSavings']; // feel free to change the shape of this input object!
		const yearlyContribution = +inputData['yearlySavings']; // as mentioned: feel free to change the shape...
		const expectedReturn = +inputData['interest'] / 100;
		const duration = +inputData['years'];
		
		let totalInterestGained = 0;

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			totalInterestGained += yearlyInterest;

			yearlyData.push({
			year: i + 1,
			yearlyInterest: yearlyInterest,
			savingsEndOfYear: currentSavings,
			yearlyContribution: yearlyContribution,
			totalInterestGained: totalInterestGained
		  });
		}

		event.preventDefault();
		props.result(yearlyData);
	};
	
	const onInputHandler = (e) => {
		const {name, value} = e.target;

		setInput((prev) => {
			return {
				...prev,
				[name]: value
			};
		});
	}

	const onReset = () => {
		setInput({
			currentSavings: '',
			yearlySavings: '',
			interest: '',
			years: ''
		});
	}

	return (
		<form className={classes.form} onSubmit={calculateHandler}>
			<div className={classes.inputGroup}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input onChange={onInputHandler} name="currentSavings" value={inputData.currentSavings} type="number" id="current-savings" />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input onChange={onInputHandler} name="yearlySavings" value={inputData.yearlySavings} type="number" id="yearly-contribution" />
				</p>
			</div>
			<div className={classes.inputGroup}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input onChange={onInputHandler} name="interest" value={inputData.interest} type="number" id="expected-return" />
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input onChange={onInputHandler} name="years" value={inputData.years} type="number" id="duration" />
				</p>
			</div>
			<p className={classes.actions}>
				<button onClick={onReset} type="reset" className={classes.buttonAlt}>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default Form;