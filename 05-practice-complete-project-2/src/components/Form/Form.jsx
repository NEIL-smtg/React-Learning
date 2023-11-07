import {React, useState} from "react";
import classes from "./Form.module.css";

const Form = (props) => {

	const [errMsg, setErrMsg] = useState({
		title: '',
		msg: ''
	});
	const [data, setData] = useState({
		username: '',
		age: ''
	});

	const dataOnChange = (event) => {
		const {name, value} = event.target;

		setData((prev) => {
			return {
				...prev,
				[name]: value
			}
		});
	}

	const dataOnSubmit = (event) => {
		const username = data.username.trim();
		const age = data.age.trim();
		
		if  (username === '' || age === ''){
			setErrMsg(() => {
				return {
					title: 'Empty Field',
					msg: 'Field should not be empty.'
				}
			});
			props.toggleModal(errMsg);
			event.preventDefault();
			return ;
		}

		if (!age.match(/^[0-9]+$/)) {
			setErrMsg(() => {
				return {
					title: 'Invalid input',
					msg: 'Age should be containing numbers only.'
				}
			});
			event.preventDefault();
			props.toggleModal(errMsg);
			return ;
		}
		props.onSubmit(data);
		event.preventDefault();
		
		setData(() => {
			return {
				username: '',
				age: ''
			}
		});
	}

	return (
		<div className={classes.form}>
			<form onSubmit={dataOnSubmit}>
				<div>
					<label htmlFor="username">Username</label>
					<input onChange={dataOnChange} value={data.username} name="username"></input>
				</div>
				<div>
					<label htmlFor="age">Age(Years)</label>
					<input onChange={dataOnChange} value={data.age} name="age"></input>
				</div>
				<button type="submit">Add User</button>
			</form>
		</div>
	);
}

export default Form;