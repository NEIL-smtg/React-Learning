import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

	const amountInputRef = useRef();
	const [error, setError] = useState(false);

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;

		if (enteredAmount.trim().length === 0 || +enteredAmount < 1 || +enteredAmount > 5){
			setError(true);
			return ;
		}

		props.addToCart(+enteredAmount);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input 
				ref={amountInputRef}
				label="Amount"
				input={{
					id:				'amount',
					type:			'number',
					min:			'1',
					max:			'5',
					step:			'1',
					defaultValue:	'1'
				}}
			/>
			<button type="submit">+ Add</button>
			{error && <p>Please enter an valid amount (1-5)</p>}
		</form>
	);
};

export default MealItemForm;