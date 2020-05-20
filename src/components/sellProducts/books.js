import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Books extends Component {
	render() {
		return (
			<div>
				<h1 className="text-heading2 text-center">Books</h1>
				<SideBar />
			</div>
		);
	}
}
