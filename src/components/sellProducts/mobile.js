import React, { Component } from 'react';
import SideBar from '../sideBar/SideBar';

export default class Mobile extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="text-heading2 text-center">Mobiles</h1>
				<SideBar />
			</React.Fragment>
		);
	}
}
