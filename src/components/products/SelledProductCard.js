import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProduct } from '../../redux/actions/dataActions';
import styled from 'styled-components';

const cardVariant = {
	hidden  : {
		x : '100vw'
	},
	visible : {
		x          : 0,
		transition : {
			type     : 'spring',
			duration : 1
		}
	}
};

function SelledProductCard(props) {
	const { product } = props;
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const handleDetail = (id) => {
		props.getProduct(id);
	};
	return (
		<ProductWrapper className="col-9 col-lg-4 mx-auto my-3 col-md-6">
			<motion.div className="card" variants={cardVariant} animate="visible" initial="hidden" data-aos="fade-in">
				<div className="img-container" onClick={() => handleDetail(product._id)}>
					<Link
						to={{
							pathname : `/detail/${product._id}`,
							state    : {
								id : product._id
							}
						}}
					>
						<img src={product.image} alt="product" className="card-img-top img" />

						<button className="cart-btn" onClick={() => handleDetail(product._id)}>
							<img src="https://img.icons8.com/flat_round/50/000000/info.png" alt="info" />
						</button>
					</Link>
				</div>

				<div className="card-footer d-flex justify-content-between" style={{ fontSize: '1.5rem' }}>
					<p className="align-self-center mb-0 my-cursive text-dark">{product.model}</p>
					<h5 className="my-cursive text-dark mb-0" style={{ fontSize: '1.5rem' }}>
						<span className="mr-1 my-cursive text-dark">Rs</span>
						{product.price}
					</h5>
				</div>
			</motion.div>
		</ProductWrapper>
	);
}

export default connect(null, { getProduct })(SelledProductCard);

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s linear;
		box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
	}
	.card-body {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgb(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgb(247, 247, 247);
		}
		.cart-btn {
			transform: translate(0, 0);
			opacity: 1;
			background-color: rgba(204, 255, 51, 1);
			box-shadow: 5px 5px 20px 1px rgb(192, 192, 192), -5px -5px 20px 1px rgb(192, 192, 192);
		}
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.cart-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: transparent;
		border: none;
		transform: translate(100%, 0);
		transition: all 1s linear;
		opacity: 0;
		border-radius: 7px 0px 7px 7px;
	}

	.img {
		max-width: 100%;
		height: 350px;
		vertical-align: middle;
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
`;
