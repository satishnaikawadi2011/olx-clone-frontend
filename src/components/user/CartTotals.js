import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from 'easy-peasy';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';
import axios from 'axios';

export default function() {
	const history = useHistory();
	const store = useStore();
	const user = store.getState().auth.user;
	const { totalAmount, totalProducts } = user;
	const [
		isLoading,
		setIsLoading
	] = useState(false);
	const [
		error,
		setError
	] = useState(null);
	const clearError = () => {
		setError(null);
	};

	const token = store.getState().auth.token;
	const clearCartHandler = () => {
		setIsLoading(true);
		axios
			.delete('http://localhost:5000/api/products/me/cart/clear', {
				headers : {
					Authorization : 'Bearer ' + token
				}
			})
			.then((res) => {
				setIsLoading(false);
				history.push('/buy');
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err.response.data.message || 'An Unknown error occured!');
				console.log(error);
			});
	};
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
							<Link to="/">
								<button
									className="btn btn-outline-danger text-uppercase mb-3 px-5"
									type="button"
									onClick={clearCartHandler}
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
}
