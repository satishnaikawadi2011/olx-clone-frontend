import productsModel from './productModel';
import userModel from './userModel';
import authModel from './authModel';

const storeModel = {
	prod : productsModel,
	user : userModel,
	auth : authModel
};

export default storeModel;
