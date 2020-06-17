import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const MyModal = (props) => {
	const [
		isModalOpen,
		setIsModalOpen
	] = useState(true);
	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={() => setIsModalOpen(false)}
			style={{
				overlay : { backgroundColor: 'grey' },
				content : {
					top          : '100px',
					bottom       : '100px',
					left         : '250px',
					right        : '250px',
					borderRadius : '10px',
					padding      : '0px'
				}
			}}
		>
			<div className="modal-header letter-spacing">
				<h1 className="text-black">{props.header}</h1>
			</div>
			<div className="mt-3 ml-2 mr-2 letter-spacing">
				<p className="text-black">{props.children}</p>
			</div>
		</Modal>
	);
};

export default MyModal;
