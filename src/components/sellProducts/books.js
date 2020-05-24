import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

import Form from './Form';
export default class Books extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2 col-2">
							<SideBar />
						</div>
						<div className="col-md-10 col-10">
							<h1 className="text-heading2 text-center">Books</h1>
							<Form />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
