import React, { useState } from 'react';
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
import Default from './Default';
import BuyProducts from './BuyProducts';
import Login from './Login';
import Cart from './Cart';
import SignUp from './SignUp';
import MyModal from '../components/shared/Modal';
import MyMap from '../utils/MyMap';

function App() {
	const [
		showModal,
		setShowModal
	] = useState(false);

	const oprnModalHandler = () => setShowModal(true);

	const closeModalHandler = () => setShowModal(false);

	const cordinates = {
		latitude  : 19.076,
		longitude : 72.8777
	};
	return (
		<React.Fragment>
			<MyModal
				show={showModal}
				header="My Header"
				onCancel={closeModalHandler}
				footer={
					<button className="btn btn-danger" onClick={closeModalHandler}>
						Close
					</button>
				}
			/>
			<Router>
				<MyNavbar />
				<button className="btn btn-primary" onClick={oprnModalHandler}>
					OPEN MODEL
				</button>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/buy" component={BuyProducts} />
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
					<Route path="/map" render={(props) => <MyMap {...props} cordinates={cordinates} />} />
					<Route component={Default} />
				</Switch>
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
