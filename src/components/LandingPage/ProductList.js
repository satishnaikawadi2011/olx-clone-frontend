import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
	state = {
		products : [
			{
				id    : 1,
				img   : 'img/furniture-n.jpg',
				title : 'Home Furniture'
			},
			{
				id    : 2,
				img   : 'img/laptops-n.jpg',
				title : 'Laptops'
			},
			{
				id    : 3,
				img   : 'img/kitchen-n.jpg',
				title : 'Home and Kitchen essentials'
			},
			{
				id    : 4,
				img   : 'img/mobiles-n.jpg',
				title : 'Mobiles'
			},
			{
				id    : 5,
				img   : 'img/electronicAppliances-n.jpg',
				title : 'Home Appliances'
			},
			{
				id    : 6,
				img   : 'img/cloths-n.jpg',
				title : 'Fashion'
			},
			{
				id    : 7,
				img   : 'img/books-n2.jpg',
				title : 'Best Study Material'
			},
			{
				id    : 8,
				img   : 'img/sports-n.jpg',
				title : 'Sport Equipment'
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<h1 className="text-center text-heading1 text-uppercase">Our Products</h1>
					<div className="container">
						<div className="row">
							{this.state.products.map((product) => {
								return <ProductCard key={product.id} product={product} />;
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
