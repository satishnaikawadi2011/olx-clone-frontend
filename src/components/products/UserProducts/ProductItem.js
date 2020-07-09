import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoadingSpinner from '../../shared/LoadingSpinner';
import ErrorModal from '../../shared/ErrorModal';
import { deleteMyProduct } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

function ProductItem(props) {
	const { _id, model, price, image, category } = props.product;
	const history = useHistory();
	const deleteHandler = () => {
		props.deleteMyProduct(_id);
	};

	return (
		<React.Fragment>
			<div className="row my-1 text-capitalize text-center mb-3">
				<div className="col-10 col-lg-2 mx-auto">
					<Link to={`/detail/${_id}`}>
						<img
							src={image}
							alt="product"
							className="img-fluid"
							style={{ height: '5rem', width: '5rem' }}
						/>
					</Link>
				</div>
				<div className="col-10 col-lg-2 mx-auto  text-muted h4">
					<span className="d-lg-none text-danger">category : </span>
					{category}
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">name of product : </span>
					{model}
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<span className="d-lg-none text-danger">price (Rs) : </span>
					{price}
				</div>

				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<div style={{ cursor: 'pointer' }} onClick={deleteHandler}>
						<img src="https://img.icons8.com/nolan/64/waste.png" alt="delete" />
					</div>
				</div>
				<div className="col-10 col-lg-2 mx-auto text-muted h4">
					<div style={{ cursor: 'pointer' }}>
						<Link
							to={{
								pathname : '/update',
								state    : {
									product : props.product
								}
							}}
						>
							<img src="https://img.icons8.com/nolan/64/approve-and-update.png" alt="update" />
						</Link>
					</div>
				</div>
			</div>
			<div className="d-lg-none" style={{ border: '2px solid red' }} />
		</React.Fragment>
	);
}

export default connect(null, { deleteMyProduct })(ProductItem);
