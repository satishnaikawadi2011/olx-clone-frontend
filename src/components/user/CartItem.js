import React, { useState } from 'react';
import { useStoreActions, useStoreState, useStore } from 'easy-peasy';

export default function CartItem({ product }) {
	const { id, model, price, img, category, owner } = product;
	const store = useStore();
	// const removeProduct = useStoreActions((actions) => actions.prod.removeProduct);
	const users = useStoreState((state) => state.user.users);
	const populatedOwner = users.find((user) => user.id === owner);
	const removeHandler = (id) => {
		// removeProduct(id);

		store.getActions().removeFromCart(id);
	};
	return (
		<React.Fragment>
			<div className="row my-1 text-capitalize text-center mb-3">
				<div className="col-10 col-lg-2 mx-auto">
					<img src={img} alt="product" className="img-fluid" style={{ height: '7rem', width: '7rem' }} />
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
					<div style={{ cursor: 'pointer' }} onClick={() => removeHandler(id)}>
						<img src="https://img.icons8.com/nolan/64/waste.png" alt="delete" />
					</div>
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">owner's email : </span>
					{populatedOwner.email}
				</div>
			</div>
			<div className="d-lg-none" style={{ border: '2px solid red' }} />
		</React.Fragment>
	);
}
