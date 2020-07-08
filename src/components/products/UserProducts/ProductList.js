import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useStore } from 'easy-peasy';
import LoadingSpinner from '../../shared/LoadingSpinner';
import ErrorModal from '../../shared/ErrorModal';
import axios from 'axios';

function UserProductList({ products }) {
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
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<div className="container-fluid">
				{myProducts.map((product) => {
					return <ProductItem key={product.id} product={product} />;
				})}
			</div>
		);
	}
}
export default UserProductList;
