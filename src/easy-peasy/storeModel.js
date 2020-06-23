import productsModel from './productModel';
import userModel from './userModel';
import authModel from './authModel';
import { action, debug } from 'easy-peasy';

const storeModel = {
	prod           : productsModel,
	user           : userModel,
	auth           : authModel,

	// action
	// addToCart : action((state, payloa) => {
	// 	console.log(debug(state.prod.products));
	// 	console.log(debug(state.user.users));
	// 	state.user.users = [];
	// }),
	addToCart      : action((state, id) => {
		const products = state.prod.products;
		const users = state.user.users;
		const product = products.find((product) => product.id === id);
		const user = state.auth.authUser;
		for (var i in users) {
			if (users[i].id === user) {
				users[i].cart.push(product);
				users[i].totalProducts++;
				users[i].totalAmount += product.price;
			}

			break; //Stop this loop, we found it!
		}
	}),

	removeFromCart : action((state, id) => {
		const users = state.user.users;
		const products = state.prod.products;
		const product = products.find((product) => product.id === id);
		const user = state.auth.authUser;
		for (var i in users) {
			if (users[i].id === user) {
				users[i].cart = users[i].cart.filter((item) => item.id !== id);
				if (users[i].totalAmount !== 0) {
					users[i].totalAmount -= product.price;
					users[i].totalProducts--;
				}
			}
			break; //Stop this loop, we found it!
		}
	}),

	clearCart      : action((state, id) => {
		const user = state.user.users.find((user) => user.id === id);
		user.totalAmount = 0;
		user.totalProducts = 0;
		user.cart = [];
	})
};

export default storeModel;
