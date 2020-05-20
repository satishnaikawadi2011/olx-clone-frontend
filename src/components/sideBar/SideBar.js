import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="sidebar-container">
					<div className="sidebar-logo ">
						<h4 className="text-heading1">Sell Products</h4>
					</div>
					<ul className="sidebar-navigation">
						<li className="header">Types</li>
						<li>
							<Link to="/mobile">
								<img src="https://img.icons8.com/color/48/000000/iphone-x.png" /> <span>Mobiles</span>
							</Link>
						</li>
						<li>
							<Link to="/laptop">
								<img src="https://img.icons8.com/color/48/000000/laptop-e-mail.png" />{' '}
								<span>Laptops</span>
							</Link>
						</li>
						{/* <li class="header">Another Menu</li> */}
						<li>
							<Link to="/homeEssentials">
								<img src="https://img.icons8.com/color/48/000000/fridge.png" />
								<span>Electronic Appliances</span>
							</Link>
						</li>
						<li>
							<Link to="/kitchen">
								<img src="https://img.icons8.com/color/48/000000/meal.png" />{' '}
								<span>Kitchen Essentials</span>
							</Link>
						</li>
						<li>
							<Link to="/books">
								<img src="https://img.icons8.com/color/48/000000/books.png" /> <span>Books</span>
							</Link>
						</li>
						<li>
							<Link to="/sports">
								<img src="https://img.icons8.com/color/48/000000/trainers.png" />
								<span> Sport</span>
							</Link>
						</li>
						<li>
							<Link to="/furniture">
								<img src="https://img.icons8.com/color/48/000000/furniture.png" />{' '}
								<span>Furniture</span>
							</Link>
						</li>
						<li>
							<Link to="/cloths">
								<img src="https://img.icons8.com/color/48/000000/doctors-laboratory-coat.png" />{' '}
								<span>Cloths</span>
							</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}
