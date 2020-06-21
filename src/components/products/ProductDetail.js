import React from 'react';
import { useStoreState } from 'easy-peasy';
import { Button } from '../styledComponents/Button';
import { Link } from 'react-router-dom';

function ProductDetail(props) {
	const product = useStoreState((state) => state.prod.detail);

	const users = useStoreState((state) => state.user.users);
	const owner = users.find((user) => user.id === product.owner);
	const mapHandler = () => {
		props.history.push({
			pathname : '/map'
		});
	};

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
							src={product.img}
							className=" mt-4"
							alt="Product"
							style={{ height: '70vh', width: '90%', marginBottom: '10%', scale: 0.5 }}
						/>
					</div>

					<div className="col-10 col-md-6 mx-auto my-5 text-capitalize">
						<h2 className="text-heading2 text-white">Model : {product.model}</h2>
						<h4 className="my-cursive text-muted text-uppercase mb-2 mt-3">made by : {product.brand}</h4>
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
							<Link to="/buy">
								<Button color="#000099" hoverColor="#80e5ff">
									Back To Products
								</Button>
							</Link>
							<Button color="#ff0066" hoverColor="#ffb3d9">
								Add To Cart
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
						<h4 className="my-cursive text-muted">Name : {owner.name}</h4>
						<h4 className="my-cursive text-muted">email : {owner.email}</h4>
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
					{/* <Link to={'/map/40'}> */}
					<Button color="#990033" hoverColor="#ff80aa" onClick={mapHandler}>
						Show Address On Map
					</Button>
					{/* </Link> */}
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProductDetail;
