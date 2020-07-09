import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getMySelledProducts } from '../../../redux/actions/userActions';
import ProductColumns from './columns';
import UserProductList from './ProductList';
import LoadingSpinner from '../../shared/LoadingSpinner';

const UserProducts = (props) => {
	useEffect(() => {}, [
		props.match
	]);
	useEffect(() => {
		props.getMySelledProducts();
	}, []);
	const { loading, selledProducts } = props.user;
	let component;
	if (loading) {
		return <LoadingSpinner />;
	}
	else {
		if (selledProducts.length === 0) {
			component = <h2 className="text-heading2 mt-3 display-4 text-center">you have no product to show</h2>;
		}
		else {
			component = (
				<React.Fragment>
					<h2 className="text-heading2 text-center mt-3 display-4">your products</h2>
					<ProductColumns />
					<UserProductList products={selledProducts} />
				</React.Fragment>
			);
		}
	}

	return <div style={{ marginBottom: '200px' }}>{component}</div>;
};

const mapStateToProps = (state) => ({
	user : state.user
});

export default connect(mapStateToProps, { getMySelledProducts })(UserProducts);
