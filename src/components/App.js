import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import LandingPage from './LandingPage/LandingPageComponent';
import Mobile from './sellProducts/mobile';
import Laptop from './sellProducts/laptop';
import Sports from './sellProducts/sports';
import Kitchen from './sellProducts/kitchen';
import Cloths from './sellProducts/cloths';
import Books from './sellProducts/books';
import Furniture from './sellProducts/furniture';
import HomeEssentials from './sellProducts/homeEssentials';
import MyNavbar from './LandingPage/MyNavbar';
import Footer from './LandingPage/Footer';
import Default from '../components/auth-forms/Default';
import Login from '../components/auth-forms/Login';
import Cart from '../components/user/Cart';
import SignUp from '../components/auth-forms/SignUp';
import MyMap from '../utils/MyMap';
import SelledProductList from './products/SelledProductList';
import ProductDetail from './products/ProductDetail';
import UserProducts from './products/UserProducts/UserProducts';
import UpdateProduct from './products/UserProducts/UpdateProduct';
import ErrorModal from './shared/ErrorModal';
import MyModal from './shared/Modal';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import axios from 'axios';
import { SET_AUTHENTICATED } from '../redux/types';
import { getUserData, logoutUser } from '../redux/actions/userActions';
import jwtDecode from 'jwt-decode';
import store from '../redux/store';

function App() {
	axios.defaults.baseURL = 'http://localhost:5000/api';

	const token = localStorage.Token;
	if (token) {
		const decodedToken = jwtDecode(token);
		if (decodedToken.exp * 1000 < Date.now()) {
			store.dispatch(logoutUser());
			window.location.href = '/login';
		}
		else {
			store.dispatch({ type: SET_AUTHENTICATED });
			axios.defaults.headers.common['Authorization'] = token;
			store.dispatch(getUserData());
		}
	}
	return (
		<React.Fragment>
			<Router>
				<MyNavbar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/cart" component={Cart} />
					<Route path="/buy" exact component={SelledProductList} />
					<Route path="/sell" exact component={Mobile} />
					<Route path="/sell/mobile" component={Mobile} />
					<Route path="/sell/laptop" component={Laptop} />
					<Route path="/sell/sports" component={Sports} />
					<Route path="/sell/homeEssentials" component={HomeEssentials} />
					<Route path="/sell/cloths" component={Cloths} />
					<Route path="/sell/kitchen" component={Kitchen} />
					<Route path="/sell/furniture" component={Furniture} />
					<Route path="/sell/books" component={Books} />
					<Route path="/map/:id" exatct component={MyMap} />
					<Route path="/detail/:id" exact component={ProductDetail} />
					<Route path="/userProducts" exact component={UserProducts} />
					<Route path="/update" exact component={UpdateProduct} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={SignUp} />
					<Route component={Default} />
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
