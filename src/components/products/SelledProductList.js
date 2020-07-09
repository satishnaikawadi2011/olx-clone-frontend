import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/dataActions';
import SelledProductCard from './SelledProductCard';
import { motion } from 'framer-motion';
import LoadingSpinner from '../shared/LoadingSpinner';

const headerVariant = {
	hidden  : {
		x : '-100vw'
	},
	visible : {
		x          : 0,
		transition : {
			type     : 'spring',
			duration : 1
		}
	}
};

const SelledProductList = (props) => {
	const { products, loading } = props.data;
	useEffect(() => {
		props.getProducts();
	}, []);
	if (loading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<motion.h2
							variants={headerVariant}
							animate="visible"
							initial="hidden"
							className="text-heading2 text-center"
							style={{ fontSize: '3rem' }}
						>
							Happy Shopping
						</motion.h2>
						<div className="row">
							{products.map((product) => {
								return <SelledProductCard key={product._id} product={product} />;
							})}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
};

const mapStateToProps = (state) => ({
	data : state.data
});

export default connect(mapStateToProps, { getProducts })(SelledProductList);
