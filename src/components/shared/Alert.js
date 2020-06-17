import React from 'react';

function Alert(props) {
	return (
		<React.Fragment>
			<div className={`alert alert-${props.status}`}>{props.children}</div>
		</React.Fragment>
	);
}

export default Alert;
