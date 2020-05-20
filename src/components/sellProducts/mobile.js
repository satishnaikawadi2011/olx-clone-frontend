import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Mobile extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2 col-2">
							<SideBar />
						</div>
						<div className="col-md-10 col-10">
							<h1 className="text-heading2 text-center">Mobiles</h1>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
