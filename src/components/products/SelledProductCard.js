import React, { useEffect } from 'react';
import { CardWrapper } from '../styledComponents/CardWapper';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

const cardVariant = {
	hidden  : {
		x : '100vw'
	},
	visible : {
		x          : 0,
		transition : {
			type      : 'spring',
			duration  : 1,
			delay     : 2,
			stiffness : 120
		}
	}
};

function SelledProductCard({ product }) {
	const handleDetail = useStoreActions((actions) => actions.prod.handleDetail);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<React.Fragment>
			<CardWrapper className="col-9 col-lg-4 my-3 col-md-6">
				<Link to="/detail" className="link">
					<motion.div
						variants={cardVariant}
						animate="visible"
						initial="hidden"
						className="card mx-auto"
						data-aos="fade-in"
						onClick={() => handleDetail(product.id)}
						whileHover={{
							scale : 0.9
						}}
					>
						<div className="card_image">
							<button className="cart-btn">
								<img src="https://img.icons8.com/nolan/64/favorite-cart.png " alt="Cart" />
							</button>
							<img src={product.img} alt="product" />{' '}
						</div>

						<div className="card_footer">
							<h4 className="my-cursive">price: Rs{product.price}</h4>
							<span className="my-cursive">{product.model}</span>
						</div>
					</motion.div>
				</Link>
			</CardWrapper>
		</React.Fragment>
	);
}

export default SelledProductCard;
