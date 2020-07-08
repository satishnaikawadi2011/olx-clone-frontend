import React from 'react';
import SideBar from '../sideBar/SideBar';
import MyForm from './Form';
import { Redirect } from 'react-router-dom';
import { useStore } from 'easy-peasy';
const Furniture = () => {
	const store = useStore();
	const isLoggedIn = store.getState().auth.isLoggedIn;
	if (!isLoggedIn) {
		return <Redirect to="/" />;
	}
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 col-2">
						<SideBar />
					</div>
					<div className="col-md-10 col-10">
						<h1 className="text-heading2 text-center">Furniture</h1>
						<MyForm />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Furniture;
