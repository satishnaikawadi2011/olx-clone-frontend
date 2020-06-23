import React from 'react';
import CartItem from './CartItem';

function CartList({ items }) {
	return (
		<div className="container-fluid">
			{items.map((item) => {
				return <CartItem key={item.id} product={item} />;
			})}
		</div>
	);
}
export default CartList;
