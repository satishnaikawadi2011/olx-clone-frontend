import { users } from '../dummy-data/data';
import { action, debug, useStore } from 'easy-peasy';

const userModel = {
	users             : users,
	authenticatedUser : null,
	// actions
	handleAuthUser    : action((state, id) => {
		const user = state.users.find((user) => user.id === id);
		console.log(debug(state));
		state.authenticatedUser = user;
	})
};

export default userModel;
