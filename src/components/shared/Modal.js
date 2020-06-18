import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

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
			className="modal-content"
			// overlayClassName="modal-overlay"
			style={{
				overlay : { backgroundColor: 'grey' },
				content : {
					top         : '50%',
					left        : '50%',
					marginRight : '-50%',
					transform   : 'translate(-50%, -50%)',
					height      : '70%',
					width       : '50%'
				}
			}}
		>
			<div className="modal-header letter-spacing">
				<h1 className="text-black" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
					{props.header}
				</h1>
			</div>
			<div className="mt-3 ml-2 mr-2 letter-spacing modal-body">
				<p className="text-black">{props.children}</p>
			</div>
		</Modal>
	);
};

export default MyModal;
