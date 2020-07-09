import React, { useState, useEffect } from 'react';
import { Button } from '../styledComponents/Button';
import { Link, useLocation, useParams, Redirect } from 'react-router-dom';
import ErrorModal from '../shared/ErrorModal';
import { connect } from 'react-redux';
import { getProduct } from '../../redux/actions/dataActions';
import { addToCart, clearErrors } from '../../redux/actions/userActions';
import LoadingSpinner from '../shared/LoadingSpinner';

function ProductDetail(props) {
	useEffect(() => {
		props.getProduct(props.match.params.id);
	}, []);
	const { product, errors } = props;
	const mapHandler = () => {
		props.history.push({
			pathname : '/map'
		});
	};
	const addToCartHandler = (id) => {
		props.addToCart(id);
	};
	const [
		error,
		setError
	] = useState(null);
	const clearError = () => {
		setError(null);
		props.clearErrors();
	};
	useEffect(
		() => {
			if (errors) {
				setError(errors);
			}
		},
		[
			errors
		]
	);
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else {
		return (
			<React.Fragment>
				<h2
					className="my-cursive text-center display-4 mt-3"
					style={{ color: 'red', textShadow: '4px 4px 4px black' }}
				>
					{product.model}
				</h2>
				<div className="container">
					<div className="row">
						<div className="col-10 col-md-6 mx-auto my-5 d-flex justify-content-center">
							<img
								src={`http://localhost:5000/${product.image}`}
								className=" mt-4"
								alt="Product"
								style={{ height: '70vh', width: '90%', marginBottom: '10%', scale: 0.5 }}
							/>
						</div>

						<div
							className="col-10 col-md-6 mx-auto my-5 text-capitalize"
							style={{ overflowX: 'hidden', tex }}
						>
							<h2 className="text-heading2 text-white">Model : {product.model}</h2>
							<h4 className="my-cursive text-muted text-uppercase mb-2 mt-3">
								made by : {product.brand}
							</h4>
							<h4>
								<strong className="my-cursive text-muted">
									price : <span className=" my-cursive text-muted">$</span>
									{product.price}
								</strong>
							</h4>
							<p className="text-capitalize font-weight-bold mt-3 mb-0 text-primary">
								some key features of product :
							</p>
							<p className="text-capitalize text-muted my-cursive">{product.title}</p>
							<p className="text-capitalize font-weight-bold mt-3 mb-0 text-primary">
								some info about product :
							</p>
							<p className="text-capitalize text-muted my-cursive">{product.description}</p>
							<div className="d-flex justify-content-center">
								<Link to="/buy" className="mr-3">
									<Button color="#000099" hoverColor="#80e5ff">
										Back To Products
									</Button>
								</Link>
								<Button
									color="#ff0066"
									hoverColor="#ffb3d9"
									onClick={() => addToCartHandler(product._id)}
								>
									ADD TO CART
								</Button>
							</div>
						</div>
					</div>

					<h2
						className="my-cursive text-center display-4"
						style={{ color: 'red', textShadow: '4px 4px 4px black' }}
					>
						Owner's Info
					</h2>
					<div className="row">
						<div className="col-10 col-md-6 mx-auto my-5 text-capitalize text-center">
							<h2 className="text-heading2 text-primary">Contact Info</h2>
							{product.owner && (
								<React.Fragment>
									{' '}
									<h4 className="my-cursive text-muted">Name : {product.owner.name}</h4>
									<h4 className="my-cursive text-muted">email : {product.owner.email}</h4>
								</React.Fragment>
							)}
							<h4 className="my-cursive text-muted">Mobile : {product.contact}</h4>
						</div>
						<div className="col-10 col-md-6 mx-auto my-5 text-capitalize text-center">
							<h2 className="text-heading2 text-primary">Address Info</h2>
							<h4 className="my-cursive text-muted">State : {product.state}</h4>
							<h4 className="my-cursive text-muted">City : {product.city}</h4>
							<h4 className="my-cursive text-muted">nearest locality : {product.locality}</h4>
							<h4 className="my-cursive text-muted">zip code : {product.zip}</h4>
						</div>
					</div>
					<div className="text-center mb-5">
						<Link to={`/map/${props.match.params.id}`}>
							<Button color="#990033" hoverColor="#ff80aa">
								Show Address On Map
							</Button>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	product : state.data.product,
	errors  : state.UI.errors
});

export default connect(mapStateToProps, { getProduct, addToCart, clearErrors })(ProductDetail);
