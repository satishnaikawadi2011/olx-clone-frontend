import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/userActions';
function CartItem(props) {
	const { _id, model, price, image, category, owner } = props.product;
	const history = useHistory();
	// const [
	// 	isLoading,
	// 	setIsLoading
	// ] = useState(false);
	// const [
	// 	error,
	// 	setError
	// ] = useState(null);
	// const clearError = () => {
	// 	setError(null);
	// };

	// const token = store.getState().auth.token;
	const removeHandler = () => {
		props.removeFromCart(_id);
	};
	// 	setIsLoading(true);
	// 	Axios.delete(`http://localhost:5000/api/products/me/removeFromCart/${id}`, {
	// 		headers : {
	// 			Authorization : 'Bearer ' + token
	// 		}
	// 	})
	// 		.then((res) => {
	// 			setIsLoading(false);
	// 			history.push('/buy');
	// 		})
	// 		.catch((err) => {
	// 			setIsLoading(false);
	// 			setError(err.response.data.message || 'An Unknown error occured!');
	// 			// console.log(error);
	// 		});
	// };
	// useEffect(() => {}, [
	// 	removeHandler
	// ]);
	// if (error) {
	// 	return <ErrorModal error={error} onCancel={clearError} />;
	// }
	// else if (isLoading) {
	// 	return <LoadingSpinner />;
	// }
	// else {
	return (
		<React.Fragment>
			<div className="row my-1 text-capitalize text-center mb-3">
				<div className="col-10 col-lg-2 mx-auto">
					<img src={image} alt="product" className="img-fluid" style={{ height: '7rem', width: '7rem' }} />
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
					<div style={{ cursor: 'pointer' }} onClick={removeHandler}>
						<img src="https://img.icons8.com/nolan/64/waste.png" alt="delete" />
					</div>
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">owner's email : </span>
					{owner.email}
				</div>
			</div>
			<div className="d-lg-none" style={{ border: '2px solid red' }} />
		</React.Fragment>
	);
}

export default connect(null, { addToCart, removeFromCart })(CartItem);
