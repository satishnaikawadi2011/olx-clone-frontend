import { LOADING_DATA, SET_PRODUCTS, LOADING_UI, SET_PRODUCT, STOP_LOADING_UI, DELETE_PRODUCT } from '../types';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
	dispatch({ type: LOADING_DATA });
	axios
		.get(`/products`)
		.then((res) => {
			dispatch({ type: SET_PRODUCTS, payload: res.data.products });
		})
		.catch((err) => {
			// dispatch({ type: SET_PRODUCTS, payload: [] });
			console.log(err);
		});
};

export const getProduct = (id) => (dispatch) => {
	dispatch({ type: LOADING_UI });
	axios
		.get(`/products/${id}`)
		.then((res) => {
			dispatch({ type: SET_PRODUCT, payload: res.data.product });
			dispatch({ type: STOP_LOADING_UI });
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteProduct = (id) => (dispatch) => {
	axios
		.delete(`/products/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_PRODUCT, payload: id });
		})
		.catch((err) => {
			console.log(err);
		});
};
