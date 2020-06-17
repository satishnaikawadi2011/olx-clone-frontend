import React from 'react';

function Input(props) {
	return (
		<div className={`form-group ${props.classNames}`}>
			<label htmlFor={props.name} className="text-black letter-spacing">
				{props.label}
			</label>
			<input
				type={props.type}
				className="form-control"
				name={props.name}
				id={props.name}
				placeholder={props.placeholder}
			/>
			<small className="text-muted letter-spacing">{props.children}</small>
		</div>
	);
}

export default Input;
