import React from 'react';
const CartColumns = () => {
	return (
		<div className="container-fluid text-center d-none d-lg-block mt-5">
			<div className="row">
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">products</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">category</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">name of product</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">price(in Rs)</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">remove</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">owner's email</p>
				</div>
			</div>
		</div>
	);
};
export default CartColumns;
