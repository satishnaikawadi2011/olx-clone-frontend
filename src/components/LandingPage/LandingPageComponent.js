import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import MyCarousel from './MyCarousel';
import ProductList from './ProductList';
import Footer from './Footer';

export default class LandingPage extends Component {
	render() {
		return (
			<React.Fragment>
				<MyNavbar />
				<MyCarousel />
				<ProductList />
				<Footer />
			</React.Fragment>
		);
	}
}
