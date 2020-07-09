import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function UserProductList({ products }) {
	return (
		<div className="container-fluid">
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</div>
	);
}

export default UserProductList;
