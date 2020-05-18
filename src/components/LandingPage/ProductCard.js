import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class ProductCard extends React.Component {
	render() {
		const { img, title, id } = this.props.product;
		return (
			<ProductWrapper className="col-9 col-lg-3 mx-auto my-3 col-md-6">
				<div className="card shadow-lg">
					<div className="img-container p-5">
						<img src={img} alt="product" className="card-img-top" />
					</div>

					{/* card footer */}
					<div className="card-footer">
						<h4 className="text-center mb-0" style={{ color: 'black' }}>
							{title}
						</h4>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

export default ProductCard;
const ProductWrapper = styled.div`
	const ProductWrapper = styled.div .card {
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-body {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgb(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgb(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgb(2, 9, 8);
		}
		.text-center {
			color: white;
		}
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
`;
