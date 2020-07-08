import { products, detailProduct } from '../dummy-data/data';
import { action, thunk } from 'easy-peasy';
import { changeArray } from '../helpers/updateArray';
import axios from 'axios';

const productModel = {
	products      : [],
	detail        : detailProduct,

	//thunk
	fetchProducts : thunk((actions, payload) => {
		axios
			.get('http://localhost:5000/api/products')
			.then((res) => {
				actions.setProducts(res.data.products);
			})
			.catch((err) => {
				console.log(err);
			});
	}),

	// actions
	setProducts   : action((state, products) => {
		state.products = products;
	}),

	removeProduct : action((state, payload) => {
		state.products = state.products.filter((product) => product.id !== payload);
	}),

	addProduct    : action((state, payload) => {
		state.products.push(payload);
	}),

	handleDetail  : action((state, payload) => {
		const product = state.products.find((product) => product._id === payload);
		state.detail = product;
	}),
	updateProduct : action((state, payload) => {
		const id = payload.id;
		for (var i in state.products) {
			if (state.products[i].id === id) {
				for (var property in payload) {
					state.products[i][property] = payload[property];
				}
				break; //Stop this loop, we found it!
			}
		}
	})
};

export default productModel;
