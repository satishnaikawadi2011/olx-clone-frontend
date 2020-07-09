import React from 'react';
import SideBar from '../sideBar/SideBar';
import MyForm from './Form';
import Footer from '../LandingPage/Footer';
const Books = (props) => {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 col-2">
						<SideBar />
					</div>
					<div className="col-md-10 col-10">
						<h1 className="text-heading2 text-center">Books</h1>
						<MyForm history={props.history} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Books;
