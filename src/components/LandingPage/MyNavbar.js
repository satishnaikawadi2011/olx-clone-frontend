import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './MyNavbar.css';

export default class MyNavbar extends Component {
	state = {
		isOpen     : false,
		isLoggedIn : true
	};
	toggle = () => {
		this.setState({
			isOpen : !this.state.isOpen
		});
	};

	render() {
		let links;
		if (this.state.isLoggedIn) {
			links = (
				<React.Fragment>
					<NavItem>
						<NavLink to="/sell" className="my-nav-link">
							Sell
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/buy" className="my-nav-link">
							Buy
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/products/:userId" className="my-nav-link">
							My Products
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/cart" className="my-nav-link">
							My Cart
						</NavLink>
					</NavItem>
					<NavItem>
						<Link
							to="/"
							className="my-nav-link"
							onClick={() => {
								this.setState({ isLoggedIn: false });
							}}
						>
							Logout
						</Link>
					</NavItem>
				</React.Fragment>
			);
		}
		else {
			links = (
				<React.Fragment>
					<NavItem>
						<NavLink to="/login" className="my-nav-link">
							Authenticate
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/products" className="my-nav-link">
							All Products
						</NavLink>
					</NavItem>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<Navbar
					style={{ background: 'linear-gradient(to left, #43cea2 0%, #185a9d 100%)' }}
					dark
					expand="sm"
					className="my-nav"
				>
					<NavbarBrand>
						<span>
							{' '}
							<NavLink to="/">
								<h2 className="text-heading2 nav-brand">
									<img
										src="https://img.icons8.com/color/48/000000/banknotes.png"
										className="mr-2"
									/>Meri Dukan
								</h2>
							</NavLink>
						</span>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{links}
						</Nav>
					</Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}
