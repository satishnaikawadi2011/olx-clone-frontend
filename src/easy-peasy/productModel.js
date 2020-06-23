import { products, detailProduct } from '../dummy-data/data';
import { action } from 'easy-peasy';
import { changeArray } from '../helpers/updateArray';

const productModel = {
	products      : products,
	detail        : detailProduct,

	// actions
	removeProduct : action((state, payload) => {
		state.products = state.products.filter((product) => product.id !== payload);
	}),

	addProduct    : action((state, payload) => {
		state.products.push(payload);
	}),

	handleDetail  : action((state, payload) => {
		const product = state.products.find((product) => product.id === payload);
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
