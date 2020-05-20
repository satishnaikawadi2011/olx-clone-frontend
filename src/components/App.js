import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import LandingPage from './LandingPage/LandingPageComponent';
import SellProducts from './SellProducts';
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

function App() {
	return (
		<React.Fragment>
			<MyNavbar />
			<Router>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/buy" component={BuyProducts} />
					<Route path="/login" component={Login} />
					<Route path="/cart" component={Cart} />
					<Route path="/sell" exact component={Mobile} />
					<Route path="/mobile" component={Mobile} />
					<Route path="/laptop" component={Laptop} />
					<Route path="/sports" component={Sports} />
					<Route path="/homeEssentials" component={HomeEssentials} />
					<Route path="/cloths" component={Cloths} />
					<Route path="/kitchen" component={Kitchen} />
					<Route path="/furniture" component={Furniture} />
					<Route path="/books" component={Books} />
					<Route component={Default} />
				</Switch>
			</Router>
			{/* <Footer /> */}
		</React.Fragment>
	);
}

export default App;
