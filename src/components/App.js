import React from 'react';
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
import { useStoreActions, useStore } from 'easy-peasy';

function App() {
	// const add = useStoreActions((actions) => actions.user.handleAuthUser);
	// add('u1');
	const store = useStore();
	// console.log(store.getActions());
	store.getActions().addToCart('p4');

	return (
		<React.Fragment>
			<Router>
				<MyNavbar />
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/buy" component={SelledProductList} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/cart" component={Cart} />
					<Route path="/sell" exact component={Mobile} />
					<Route path="/sell/mobile" component={Mobile} />
					<Route path="/sell/laptop" component={Laptop} />
					<Route path="/sell/sports" component={Sports} />
					<Route path="/sell/homeEssentials" component={HomeEssentials} />
					<Route path="/sell/cloths" component={Cloths} />
					<Route path="/sell/kitchen" component={Kitchen} />
					<Route path="/sell/furniture" component={Furniture} />
					<Route path="/sell/books" component={Books} />
					<Route path="/map" component={MyMap} />
					<Route path="/detail" component={ProductDetail} />
					<Route path="/userProducts" component={UserProducts} />
					<Route path="/update" component={UpdateProduct} />
					<Route component={Default} />
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
