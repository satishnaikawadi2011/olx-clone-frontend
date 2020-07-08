import { SET_PRODUCT, SET_PRODUCTS, LOADING_DATA, DELETE_PRODUCT, UPLOAD_PRODUCT } from '../types';

const initialState = {
	products : [],
	product  : {},
	loading  : false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING_DATA:
			return {
				...state,
				loading : true
			};
		case SET_PRODUCTS:
			return {
				...state,
				products : action.payload,
				loading  : false
			};
		case SET_PRODUCT:
			return {
				...state,
				product : action.payload
			};
		case DELETE_PRODUCT:
			const index = state.products.findIndex((product) => product._id === action.payload);
			state.products.splice(index, 1);
			return {
				...state
			};
		default:
			return state;
	}
}
