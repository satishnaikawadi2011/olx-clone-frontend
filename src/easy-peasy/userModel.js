import { users } from '../dummy-data/data';
import { action } from 'easy-peasy';

const userModel = {
	users             : users,
	authenticatedUser : null,
	// actions
	handleAuthUser    : action((state, id) => {
		const user = state.users.find((user) => user.id === id);
		state.authenticatedUser = user;
	})
};

export default userModel;
