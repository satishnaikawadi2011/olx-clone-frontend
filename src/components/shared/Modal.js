import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {
	const { buttonLabel, className } = props;

	// const [
	// 	modal,
	// 	setModal
	// ] = useState(false);

	// const toggle = () => setShow(!props.show);

	return (
		<div>
			<Modal isOpen={props.show} toggle={props.toggle} className={className}>
				<ModalHeader className={props.headerBg} style={{ color: 'black' }} toggle={props.toggle}>
					{<span className={props.headerText}>{props.header}</span>}
				</ModalHeader>
				<ModalBody className={props.bodyClass}>{props.body}</ModalBody>
				<ModalFooter>
					{props.submit && (
						<Button color="success" onClick={props.onSubmit}>
							{props.submit}
						</Button>
					)}
					{props.cancel && (
						<Button color="danger" onClick={props.onCancel}>
							{props.cancel}
						</Button>
					)}
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default MyModal;
