import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import './MyNavbar.css';

const logoVariant = {
	hidden  : {
		y       : '-100vh',
		opacity : 0
	},
	visible : {
		opacity    : 1,
		y          : 0,
		transition : {
			type      : 'spring',
			stiffness : 100,
			delay     : 0.5
		}
	}
};
const MyNavbar = (props) => {
	const location = useLocation();
	console.log('props', location);
	useEffect(() => {}, [
		location
	]);
	const [
		isOpen,
		setIsOpen
	] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	const [
		display,
		setDisplay
	] = useState('d-sm-none');
	const toggleHandler = () => {
		if (display === 'd-sm-none') {
			setDisplay('');
		}
		else {
			setDisplay('d-sm-none');
		}
	};

	const logoutHandler = () => {
		props.logoutUser();
	};

	let links;
	if (props.authenticated) {
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
					<NavLink to="/userProducts" className="my-nav-link">
						My Products
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/cart" className="my-nav-link">
						My Cart
					</NavLink>
				</NavItem>
				<NavItem>
					<Link to="/" className="my-nav-link" onClick={logoutHandler}>
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
					<NavLink to="/buy" className="my-nav-link">
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
				<NavbarBrand href="/">
					<span>
						{/* <NavLink to="/"> */}
						<motion.h2
							className="text-heading2 nav-brand"
							variants={logoVariant}
							initial="hidden"
							animate="visible"
						>
							<img
								src="https://img.icons8.com/color/48/000000/banknotes.png"
								className="mr-2"
								alt="logo"
							/>Meri Dukan
						</motion.h2>
						{/* </NavLink> */}
					</span>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<div className="d-sm-flex" style={{ marginLeft: 'auto' }}>
						<Nav className={`ml-auto ${display}`} navbar>
							{links}
						</Nav>

						<img
							src="https://img.icons8.com/doodle/48/000000/menu.png"
							style={{ cursor: 'pointer' }}
							onClick={toggleHandler}
						/>
					</div>
				</Collapse>
			</Navbar>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => ({
	authenticated : state.user.authenticated
});

export default connect(mapStateToProps, { logoutUser })(MyNavbar);
