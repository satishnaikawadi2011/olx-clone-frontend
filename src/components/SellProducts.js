import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

export default class SellProducts extends Component {
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<h1 className="text-heading2">Sell Products</h1>
			</React.Fragment>
		);
	}
}
