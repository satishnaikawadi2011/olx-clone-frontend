import React from 'react';

function TextArea(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.name} className="text-black letter-spacing">
				{props.label}
			</label>
			<textarea className="form-control" name={props.name} rows={props.rows} {...props} />
			<small className="text-muted letter-spacing">{props.children}</small>
		</div>
	);
}

export default TextArea;
