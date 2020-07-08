import { users } from '../dummy-data/data';
import { action, debug, useStore, thunk } from 'easy-peasy';
import axios from 'axios';

const userModel = {
	users             : [],
	authenticatedUser : null,
	cart              : [],
	//thunk
	fetchUsers        : thunk((actions, payload) => {
		axios
			.get('http://localhost:5000/api/users')
			.then((res) => {
				actions.setUsers(res.data.users);
			})
			.catch((err) => {
				console.log(err);
			});
	}),

	// actions
	setUsers          : action((state, users) => {
		state.users = users;
	}),

	setCart           : action((state, cart) => {
		state.cart = cart;
	}),
	// actions
	handleAuthUser    : action((state, id) => {
		const user = state.users.find((user) => user.id === id);
		console.log(debug(state));
		state.authenticatedUser = user;
	})
};

export default userModel;
