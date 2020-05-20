import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Laptop extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2 col-6">
							<SideBar />
						</div>
						<div className="col-md-10 col-6">
							<h1 className="text-heading2 text-center">Laptops</h1>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
