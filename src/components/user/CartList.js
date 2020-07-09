import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import ErrorModal from '../shared/ErrorModal';
import axios from 'axios';

function CartList({ items }) {
	return (
		<div className="container-fluid">
			{items.map((item) => {
				return <CartItem key={item._id} product={item} />;
			})}
		</div>
	);
}

export default CartList;
