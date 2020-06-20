import React from 'react';
import { useStoreState } from 'easy-peasy';
import SelledProductCard from './SelledProductCard';
import { motion } from 'framer-motion';

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
	const products = useStoreState((state) => state.prod.products);
	// console.log(products.products);
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container-fluid">
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
							return <SelledProductCard key={product.id} product={product} />;
						})}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SelledProductList;
