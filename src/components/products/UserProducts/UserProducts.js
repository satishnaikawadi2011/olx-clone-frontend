import React, { useState, useEffect } from 'react';
import { useStore } from 'easy-peasy';
import ProductColumns from './columns';
import UserProductList from './ProductList';
import axios from 'axios';
import LoadingSpinner from '../../shared/LoadingSpinner';
import ErrorModal from '../../shared/ErrorModal';
import { Redirect } from 'react-router-dom';

const UserProducts = () => {
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
		myProducts,
		setMyProducts
	] = useState([]);
	const clearError = () => {
		setError(null);
	};

	const token = store.getState().auth.token;
	const fetchMyProducts = () => {
		setIsLoading(true);
		axios
			.get('http://localhost:5000/api/products/me', {
				headers : {
					Authorization : 'Bearer ' + token
				}
			})
			.then((res) => {
				setIsLoading(false);
				setMyProducts(res.data.products);
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
		fetchMyProducts();
	}, []);
	const user = store.getState().auth.user;
	const isLoggedIn = store.getState().auth.isLoggedIn;
	if (!isLoggedIn) {
		return <Redirect to="/" />;
	}
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		let component;
		if (myProducts.length === 0) {
			component = <h2 className="text-heading2 mt-3 display-4 text-center">you have no product to show</h2>;
		}
		else {
			component = (
				<React.Fragment>
					<h2 className="text-heading2 text-center mt-3 display-4">your products</h2>
					<ProductColumns />
					<UserProductList products={myProducts} />
				</React.Fragment>
			);
		}
		return <div style={{ marginBottom: '200px' }}>{component}</div>;
	}
};

export default UserProducts;
