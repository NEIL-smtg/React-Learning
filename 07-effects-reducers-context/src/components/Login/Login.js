import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}
	return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 };
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: '', isValid: false };
}

const Login = () => {
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null
	});

	const authContext = useContext(AuthContext);

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

	const {isValid: emailIsValid} = emailState;
	const {isValid: pwIsValid} = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('Checking form validity!');
			setFormIsValid(emailIsValid && pwIsValid);
		}, 500);

		return () => {
			console.log('CLEANUP');
			clearTimeout(identifier);
		};
	}, [emailIsValid, pwIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({type: 'USER_INPUT', val: event.target.value});
		// setFormIsValid(emailState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({type: 'USER_INPUT', val: event.target.value});
		// setFormIsValid(passwordState.isValid);
	};

	const validateEmailHandler = () => {
		dispatchEmail({type: 'INPUT_BLUR'});
	};

	const validatePasswordHandler = () => {
		dispatchEmail({type: 'INPUT_BLUR'});
	};

	const emailInputRef = useRef();
	const pwInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid){
			authContext.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid){
			emailInputRef.current.focus();
		} else {
			pwInputRef.current.focus();
		}
		authContext.onLogin(emailState.value, passwordState.value);
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					type="email"
					label="email"
					id="email"
					value={emailState.value}
					isValid={emailState.isValid}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={pwInputRef}
					type="password"
					id="password"
					label="password"
					value={passwordState.value}
					isValid={passwordState.isValid}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn} disabled={!formIsValid}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;