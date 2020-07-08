import {
	LOADING_UI,
	SET_ERRORS,
	CLEAR_ERRORS,
	SET_USER,
	LOADING_USER,
	SET_CART,
	SET_SELLED_PRODUCTS,
	SET_UNAUTHENTICATED,
	SET_AUTHENTICATED
} from '../types';
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post(`/users/login`, userData)
		.then((res) => {
			setAuthorizationHeader(res.data.token);
			dispatch(getUserData());
			// dispatch({ type: SET_USER, payload: res.data.user });
			dispatch({ type: SET_AUTHENTICATED });
			dispatch({ type: CLEAR_ERRORS });
			history.push('/');
		})
		.catch((err) => {
			dispatch({
				type    : SET_ERRORS,
				payload : err.response.data.message
			});
		});
};

export const getUserData = () => (dispatch) => {
	dispatch({ type: LOADING_USER });
	axios
		.get(`/users/me`)
		.then((res) => {
			dispatch({ type: SET_USER, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signupUser = (newUserData, history) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.post(`/users`, newUserData)
		.then((res) => {
			setAuthorizationHeader(res.data.token);
			dispatch(getUserData());
			dispatch({ type: SET_USER, payload: res.data.user });
			dispatch({ type: CLEAR_ERRORS });
			history.push('/');
		})
		.catch((err) => {
			dispatch({
				type    : SET_ERRORS,
				payload : err.response.data
			});
		});
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('Token');
	delete axios.defaults.headers.common['Authorization'];
	dispatch({ type: SET_UNAUTHENTICATED });
};

export const getMyCart = () => (dispatch) => {
	dispatch({ type: LOADING_USER });
	axios
		.get(`/products/me/cart`)
		.then((res) => {
			dispatch({ type: SET_CART, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getMySelledProducts = () => (dispatch) => {
	dispatch({ type: LOADING_USER });
	axios
		.get(`/products/me`)
		.then((res) => {
			dispatch({ type: SET_SELLED_PRODUCTS, payload: res.data.products });
		})
		.catch((err) => {
			console.log(err);
		});
};

const setAuthorizationHeader = (token) => {
	const Token = `Bearer ${token}`;
	localStorage.setItem('Token', Token);
	axios.defaults.headers.common['Authorization'] = Token;
};
