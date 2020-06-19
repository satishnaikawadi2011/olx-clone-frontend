import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement('#root');
const MyModal = (props) => {
	// const [
	// 	isModalOpen,
	// 	setIsModalOpen
	// ] = useState(props.show);

	// const onCancelHandler = () => {
	// 	setIsModalOpen(!isModalOpen);
	// };
	return (
		<Modal
			isOpen={props.show}
			onRequestClose={props.onCancel}
			{...props.footer}
			className="modal-content"
			// overlayClassName="modal-overlay"
			style={{
				overlay : { backgroundColor: 'grey', zIndex: '1000' },
				content : {
					position    : 'relative',
					top         : '50%',
					left        : '50%',
					marginRight : '-50%',
					transform   : 'translate(-50%, -50%)',
					height      : '70%',
					width       : '50%',
					zIndex      : '10000'
				}
			}}
		>
			<header className={`modal__header ${props.headerClass}`}>
				<h2 className="text-heading2">{props.header}</h2>
			</header>
			<form
				onSubmit={

						props.onSubmit ? props.onSubmit :
						(event) => event.preventDefault()
				}
			>
				<div className={`modal__content ${props.contentClass}`}>{props.children}</div>
				<div className={`modal__footer ${props.footerClass}`}>{props.footer}</div>
			</form>
			{/* <div className="modal-header letter-spacing">
				<h2 className="text-black" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
					{props.header}
				</h2>
			</div>
			<div className="mt-3 ml-2 mr-2 letter-spacing modal-body">
				<p className="text-black">{props.children}</p>
			</div> */}
		</Modal>
	);
};

export default MyModal;
