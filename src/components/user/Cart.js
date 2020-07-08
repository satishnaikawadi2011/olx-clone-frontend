import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useStoreState, useStoreActions, useStore } from 'easy-peasy';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';
import axios from 'axios';

function Cart(props) {
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
	useEffect(() => {}, [
		props.match
	]);
	useEffect(() => {
		fetchCart();
		store.getActions().auth.fetchUser({ token: token });
	}, []);
	const user = store.getState().auth.user;
	const isLoggedIn = store.getState().auth.isLoggedIn;
	if (!isLoggedIn) {
		return <Redirect to="/" />;
	}
	let component;
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		if (cart.length === 0) {
			component = <h2 className="text-heading2 mt-3 display-4 text-center">your cart is empty</h2>;
		}
		else {
			component = (
				<React.Fragment>
					<h2 className="text-heading2 text-center mt-3 display-4">your cart</h2>
					<CartColumns />
					<CartList items={cart} />
					<CartTotals user={user} />
				</React.Fragment>
			);
		}
		return <div style={{ marginBottom: '200px' }}>{component}</div>;
	}
}

export default Cart;
