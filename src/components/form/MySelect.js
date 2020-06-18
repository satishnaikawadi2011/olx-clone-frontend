import React from 'react';

function MySelect(props) {
	return (
		<div className="form-group">
			<label htmlFor={props.name} className="text-black mr-3">
				{' '}
				{props.label}
			</label>
			<select className="form-control" id={props.name} name={props.name} {...props} style={{ color: 'black' }}>
				{props.optionarray.map((option) => {
					return (
						<option className="text-black" value={option} key={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
}

export default MySelect;
