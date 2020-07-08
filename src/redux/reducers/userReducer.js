import {
	SET_USER,
	SET_AUTHENTICATED,
	SET_UNAUTHENTICATED,
	LOADING_USER,
	ADD_PROUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	CLEAR_CART,
	DELETE_PRODUCT,
	UPLOAD_PRODUCT,
	SET_CART,
	SET_SELLED_PRODUCTS
} from '../types';

const initialState = {
	authenticated  : false,
	loading        : false,
	userData       : {},
	cart           : [],
	selledProducts : []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {
				...state,
				authenticated : true
			};
		case SET_UNAUTHENTICATED:
			return initialState;
		case SET_USER:
			return {
				...state,
				authenticated : true,
				loading       : false,
				userData      : action.payload.user
			};
		case LOADING_USER:
			return {
				...state,
				loading : true
			};
		case DELETE_PRODUCT:
			return {
				...state,
				cart           : state.cart.filter((product) => product._id !== action.payload),
				selledProducts : state.selledProducts.filter((prodcut) => prodcut._id !== action.payload)
			};
		case SET_CART:
			return {
				...state,
				cart    : action.payload,
				loading : false
			};
		case SET_SELLED_PRODUCTS:
			return {
				...state,
				selledProducts : action.payload,
				loading        : false
			};
		default:
			return state;
	}
}
