import React, { Fragment, useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	const cartCtx = useContext(CartContext);

	const addToCartHandler = (amount) => {
		console.log(amount);
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
 		});
	};

	return (
		<Fragment>
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.desc}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm addToCart={addToCartHandler}/>
			</div>
		</li>
		</Fragment>
	)
};

export default MealItem;