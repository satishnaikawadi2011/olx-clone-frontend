import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import ProductColumns from './columns';
import UserProductList from './ProductList';

function UserProducts() {
	const userId = useStoreState((state) => state.auth.authUser);
	console.log(userId);
	const products = useStoreState((state) => state.prod.products);
	const myProducts = products.filter((product) => product.owner === userId);
	console.log(myProducts);
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

export default UserProducts;
