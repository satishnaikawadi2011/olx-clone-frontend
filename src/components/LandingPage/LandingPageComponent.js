import React, { Component } from 'react';

import MyCarousel from './MyCarousel';
import ProductList from './ProductList';

export default class LandingPage extends Component {
	render() {
		return (
			<React.Fragment>
				<MyCarousel />
				<ProductList />
			</React.Fragment>
		);
	}
}
