import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';
import { connect } from 'react-redux';
import { getMyCart } from '../../redux/actions/userActions';
import axios from 'axios';

function Cart(props) {
	useEffect(() => {}, [
		props.match
	]);
	useEffect(() => {
		props.getMyCart();
	}, []);
	const { loading, cart, userData } = props.user;
	let component;
	if (loading) {
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
					<CartTotals user={userData} />
				</React.Fragment>
			);
		}
		return <div style={{ marginBottom: '200px' }}>{component}</div>;
	}
}

const mapStateToProps = (state) => ({
	user : state.user
});

export default connect(mapStateToProps, { getMyCart })(Cart);
