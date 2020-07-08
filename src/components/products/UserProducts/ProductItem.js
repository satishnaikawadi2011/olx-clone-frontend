import React, { useState, useEffect } from 'react';
import { useStoreActions, useStore } from 'easy-peasy';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../../shared/LoadingSpinner';
import ErrorModal from '../../shared/ErrorModal';

export default function ProductItem({ product }) {
	const { _id, model, price, image, category } = product;
	const store = useStore();
	const history = useHistory();
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
	const removeProduct = () => {
		setIsLoading(true);
		axios
			.delete(`http://localhost:5000/api/products/${_id}`, {
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
				if (err.response) {
					return setError(err.response.data.message || 'An Unknown error occured!');
				}
				setError('An Unknown error occured');
			});
	};
	const deleteHandler = () => {
		removeProduct();
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
				<div className="row my-1 text-capitalize text-center mb-3">
					<div className="col-10 col-lg-2 mx-auto">
						<img
							src={image}
							alt="product"
							className="img-fluid"
							style={{ height: '5rem', width: '5rem' }}
						/>
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
						<div style={{ cursor: 'pointer' }} onClick={() => deleteHandler()}>
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
}
