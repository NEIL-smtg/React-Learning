import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {

	console.log(props);

	function closeModal() {
		props.toggleModal();
	}

	return (
		<div onClick={closeModal} className={classes.Modal}>
			<div className={classes.overlay}>
				<div className={classes['modal-content']}>
					<h2>{props.modalInfo.title}</h2>
					<p>{props.modalInfo.msg}</p>
					<button onClick={closeModal}>close</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;