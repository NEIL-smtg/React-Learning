import React from "react";
import classes from "./Lists.module.css"

const createItem = (itemData) => {
	return (
		<div className={classes.item}>
			<p>{`${itemData.username} (${itemData.age} years old)`}</p>
		</div>
	);
}

const Lists = (props) => {
	const data = props.data;
	console.log(data);
	return (
		<div className={classes.lists}>
			{data.map((itemData) => createItem(itemData))}
		</div>
	);
};

export default Lists;