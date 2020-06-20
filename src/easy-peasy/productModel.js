import { products, detailProduct } from '../dummy-data/data';
import { action } from 'easy-peasy';

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
	})
};

export default productModel;
