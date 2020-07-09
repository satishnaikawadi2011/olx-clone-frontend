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
	SET_SELLED_PRODUCTS,
	UPDATE_PRODUCT
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
		case ADD_PROUCT_TO_CART:
			return {
				...state,
				cart     : [
					action.payload,
					...state.cart
				],
				loading  : false,
				userData : {
					...state.userData,
					totalAmount   : state.userData.totalAmount + action.payload.price,
					totalProducts : state.userData.totalProducts + 1
				}
			};
		case REMOVE_PRODUCT_FROM_CART:
			return {
				...state,
				cart     : state.cart.filter((product) => product._id !== action.payload._id),
				userData : {
					...state.userData,
					totalAmount   : state.userData.totalAmount - action.payload.price,
					totalProducts : state.userData.totalProducts - 1
				}
			};
		case CLEAR_CART:
			return {
				...state,
				cart     : [],
				userData : {
					...state.userData,
					totalAmount   : 0,
					totalProducts : 0
				}
			};
		case UPDATE_PRODUCT:
			const index = state.selledProducts.findIndex((product) => product._id === action.payload._id);
			console.log(index);
			state.selledProducts[index] = action.payload;
			return {
				...state
			};
		default:
			return state;
	}
}
