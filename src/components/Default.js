import React from 'react';
import styled from 'styled-components';
const Default = (props) => {
	// console.log(this.props)
	return (
		<div className="container" style={{ marginBottom: '100px' }}>
			<div className="row">
				<div className="col-10 mx-auto text-center text-uppercase pt-5">
					<h1 className="display-3 text-heading2">404</h1>
					<h1 className="text-heading2">error</h1>
					<h2 className="text-heading2">page not found</h2>
					<h3 className="text-heading2">
						the requested url
						<span className="text-danger" style={{ textShadow: 'none' }}>
							{' '}
							{props.location.pathname}{' '}
						</span>
						was not found
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Default;
