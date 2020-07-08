import { action, thunk } from 'easy-peasy';
import axios from 'axios';

const authModel = {
	isLoggedIn : false,
	token      : null,
	userId     : null,
	user       : null,

	// thunk
	fetchUser  : thunk((actions, payload) => {
		axios
			.get('http://localhost:5000/api/users/me', {
				headers : {
					Authorization : 'Bearer ' + payload.token
				}
			})
			.then((res) => {
				actions.setAuth({ user: res.data.user });
			});
	}),
	// actions
	setAuth    : action((state, payload) => {
		state.user = payload.user;
	}),
	login      : action((state, payload) => {
		state.token = payload.token;
		state.userId = payload.userId;
		state.user = payload.user;
		state.isLoggedIn = true;
		const tokenExpirationDate = payload.expiration || new Date(new Date().getTime() + 1000 * 60 * 60 * 2);
		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId     : payload.userId,
				user       : payload.user,
				token      : payload.token,
				expiration : tokenExpirationDate.toISOString()
			})
		);
	}),
	logout     : action((state, payload) => {
		state.token = null;
		state.userId = null;
		state.user = null;
		state.isLoggedIn = false;
		localStorage.removeItem('userData');
	})
};

export default authModel;
