import React from 'react';

import MyCarousel from './MyCarousel';
import ProductList from './ProductList';

const LandingPage = () => {
	return (
		<React.Fragment>
			<MyCarousel />
			<ProductList />
		</React.Fragment>
	);
};

export default LandingPage;
