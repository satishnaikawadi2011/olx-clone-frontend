import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Kitchen extends Component {
	render() {
		return (
			<div>
				<h1 className="text-heading2 text-center">Kitchen </h1>
				<SideBar />
			</div>
		);
	}
}
