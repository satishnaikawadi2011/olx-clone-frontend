import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Laptop extends Component {
	render() {
		return (
			<div>
				<h1 className="text-heading2 text-center">laptops</h1>
				<SideBar />
			</div>
		);
	}
}
