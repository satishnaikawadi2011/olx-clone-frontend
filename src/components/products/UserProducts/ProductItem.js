import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
	const { id, model, price, img, category } = product;

	const removeProduct = useStoreActions((actions) => actions.prod.removeProduct);
	const deleteHandler = (id) => {
		removeProduct(id);
	};
	return (
		<React.Fragment>
			<div className="row my-1 text-capitalize text-center mb-3">
				<div className="col-10 col-lg-2 mx-auto">
					<img src={img} alt="product" className="img-fluid" style={{ height: '5rem', width: '5rem' }} />
				</div>
				<div className="col-10 col-lg-2 mx-auto  text-muted h4">
					<span className="d-lg-none text-danger">category : </span>
					{category}
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">name of product : </span>
					{model}
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">price (Rs) : </span>
					{price}
				</div>

				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<div style={{ cursor: 'pointer' }} onClick={() => deleteHandler(id)}>
						<img src="https://img.icons8.com/nolan/64/waste.png" alt="delete" />
					</div>
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<div style={{ cursor: 'pointer' }}>
						<Link
							to={{
								pathname : '/update',
								state    : {
									product
								}
							}}
						>
							<img src="https://img.icons8.com/nolan/64/approve-and-update.png" alt="update" />
						</Link>
					</div>
				</div>
			</div>
			<div className="d-lg-none" style={{ border: '2px solid red' }} />
		</React.Fragment>
	);
}