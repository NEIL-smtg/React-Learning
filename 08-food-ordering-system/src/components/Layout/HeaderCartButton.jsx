import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {

	const [bump, setBump] = useState(false);
	const cartCtx = useContext(CartContext);

	const numCartItems = cartCtx.items.reduce((currNum, item) => {
		return currNum + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${bump ? classes.bump : ''}`
	const {items} = cartCtx;

	useEffect(() => {
		if (!cartCtx.items.length)
			return ;
		
			setBump(true);
		const timer = setTimeout(() => {
			setBump(false);
		}, 300);
		
		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}><CartIcon /></span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numCartItems}</span>
		</button>
	)
};

export default HeaderCartButton;