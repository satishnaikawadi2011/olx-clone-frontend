import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/userActions';

function CartTotals(props) {
	const history = useHistory();
	const { totalAmount, totalProducts } = props.user;
	const clearHandler = () => {
		props.clearCart();
	};
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={clearHandler}
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

export default connect(null, { clearCart })(CartTotals);
