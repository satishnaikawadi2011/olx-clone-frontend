import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'easy-peasy';

export default function({ user }) {
	const { totalAmount, totalProducts, id } = user;
	const store = useStore();
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => store.getActions().clearCart(id)}
							>
								clear cart{' '}
							</button>
						</Link>
						<h5>
							<span className="my-cursive text-dark"> Total No. Of products : </span>
							<strong className="text-dark my-cursive"> {totalProducts}</strong>
						</h5>
						<h5>
							<span className="my-cursive text-dark"> Total amount : </span>
							<strong className="text-dark my-cursive"> Rs {totalAmount}</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
