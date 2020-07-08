import React, { useState } from 'react';
import MyModal from './Modal';

function ErrorModal(props) {
	return (
		<MyModal
			show={!!props.error}
			onCancel={props.onCancel}
			header="An Error Occurred !"
			cancel="Okay"
			body={props.error}
			headerBg="bg-danger"
			headerText="my-cursive"
			bodyClass="text-dark text-capitalize"
		/>
	);
}

export default ErrorModal;
