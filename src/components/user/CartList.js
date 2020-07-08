import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import ErrorModal from '../shared/ErrorModal';
import axios from 'axios';
import { useStore } from 'easy-peasy';

function CartList({ items }) {
	const store = useStore();
	const [
		isLoading,
		setIsLoading
	] = useState(false);
	const [
		error,
		setError
	] = useState(null);
	const [
		cart,
		setCart
	] = useState([]);
	const clearError = () => {
		setError(null);
	};

	const token = store.getState().auth.token;
	const fetchCart = () => {
		setIsLoading(true);
		axios
			.get('http://localhost:5000/api/products/me/cart', {
				headers : {
					Authorization : 'Bearer ' + token
				}
			})
			.then((res) => {
				setIsLoading(false);
				setCart(res.data.cart);
			})
			.catch((err) => {
				setIsLoading(false);
				if (err.response) {
					return setError(err.response.data.message || 'An Unknown error occured!');
				}
				setError('An Unknown error occured');
				// console.log(error);
			});
	};
	useEffect(() => {
		fetchCart();
	}, []);
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<div className="container-fluid">
				{cart.map((item) => {
					return <CartItem key={item._id} product={item} />;
				})}
			</div>
		);
	}
}
export default CartList;
