import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';

function Cart() {
	const userId = useStoreState((state) => state.auth.authUser);
	// console.log(userId);
	const users = useStoreState((state) => state.user.users);
	const user = users.find((user) => userId === user.id);
	// const products = useStoreState((state) => state.prod.products);
	// const myProducts = products.filter((product) => product.owner === userId);
	// console.log(myProducts);
	let component;
	if (user.cart.length === 0) {
		component = <h2 className="text-heading2 mt-3 display-4 text-center">your cart is empty</h2>;
	}
	else {
		component = (
			<React.Fragment>
				<h2 className="text-heading2 text-center mt-3 display-4">your cart</h2>
				<CartColumns />
				<CartList items={user.cart} />
				<CartTotals user={user} />
			</React.Fragment>
		);
	}
	return <div style={{ marginBottom: '200px' }}>{component}</div>;
}

export default Cart;
