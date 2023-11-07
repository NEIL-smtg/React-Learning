import React from "react";

const Wrapper = props => {
	return props.children;
};

// a bunch of divs will causing "div soup", due
// to many uneccessary div, so a wrapper can be
// built to just return all the children inside the props,
// typically we dont need to create our own wrapper

// React has builtin wrapper by just typing
// <></> or <React.Fragment>

export default Wrapper;