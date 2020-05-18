import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export default class MyNavbar extends Component {
	state = {
		isOpen : false
	};
	toggle = () => {
		this.setState({
			isOpen : !this.state.isOpen
		});
	};
	render() {
		// const textHeading = {
		// 	fontFamily : `'Permanent Marker', cursive !important`,
		// 	color      : 'orange',
		// 	textShadow : '4px 4px 4px black'
		// };
		return (
			<React.Fragment>
				<Navbar
					style={{ background: 'linear-gradient(to left, #43cea2 0%, #185a9d 100%)' }}
					dark
					expand="sm"
					className="mb-5"
				>
					<NavbarBrand href="/">
						<h2 className="text-heading2">
							<img src="https://img.icons8.com/color/48/000000/banknotes.png" className="mr-2" />Meri
							Dukan
						</h2>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/" style={{ color: 'white' }}>
									Github
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
