import React from 'react';
const ProductColumns = () => {
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
					<p className="text-uppercase my-cursive text-danger h3">delete</p>
				</div>
				<div className="col-10 col-lg-2 mx-auto">
					<p className="text-uppercase my-cursive text-danger h3">update</p>
				</div>
			</div>
		</div>
	);
};
export default ProductColumns;
