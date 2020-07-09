import {
	LOADING_UI,
	SET_ERRORS,
	CLEAR_ERRORS,
	SET_USER,
	LOADING_USER,
	SET_CART,
	SET_SELLED_PRODUCTS,
	SET_UNAUTHENTICATED,
	SET_AUTHENTICATED,
	ADD_PROUCT_TO_CART,
	STOP_LOADING_UI,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
	DELETE_PRODUCT,
	UPDATE_PRODUCT
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
			dispatch({ type: SET_CART, payload: res.data.cart });
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

export const addToCart = (id) => (dispatch) => {
	axios
		.post(`/products/me/addToCart/${id}`)
		.then((res) => {
			dispatch({ type: ADD_PROUCT_TO_CART, payload: res.data.product });
			dispatch({ type: CLEAR_ERRORS });
		})
		.catch((err) => {
			dispatch({ type: SET_ERRORS, payload: err.response.data.message });
		});
};

export const removeFromCart = (id) => (dispatch) => {
	axios
		.delete(`/products/me/removeFromCart/${id}`)
		.then((res) => {
			dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: res.data.product });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const clearCart = () => (dispatch) => {
	axios
		.delete(`/products/me/cart/clear`)
		.then(() => {
			dispatch({ type: CLEAR_CART });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteMyProduct = (id) => (dispatch) => {
	axios
		.delete(`/products/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_PRODUCT, payload: id });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const updateMyProduct = (id, data) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.patch(`/products/${id}`, data)
		.then((res) => {
			dispatch({ type: UPDATE_PRODUCT, payload: res.data.product });
			dispatch({ type: STOP_LOADING_UI });
		})
		.catch((err) => {
			dispatch({ type: SET_ERRORS, payload: err.response.data.message });
		});
};

export const clearErrors = () => (dispatch) => {
	dispatch({ type: CLEAR_ERRORS });
};

const setAuthorizationHeader = (token) => {
	const Token = `Bearer ${token}`;
	localStorage.setItem('Token', Token);
	axios.defaults.headers.common['Authorization'] = Token;
};
