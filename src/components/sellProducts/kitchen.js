import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Kitchen extends Component {
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2 col-2">
							<SideBar />
						</div>
						<div className="col-md-10 col-10">
							<h1 className="text-heading2 text-center">Kitchen</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
