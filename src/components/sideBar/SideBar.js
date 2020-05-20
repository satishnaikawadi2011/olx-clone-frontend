import React, { Component } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="sidebar-container">
					<div className="sidebar-logo">Project Name</div>
					<ul className="sidebar-navigation">
						<li className="header">Navigation</li>
						<li>
							<Link to="/mobile">
								<img src="https://img.icons8.com/color/48/000000/iphone-x.png" /> Mobiles
							</Link>
						</li>
						<li>
							<Link to="/laptop">
								<img src="https://img.icons8.com/color/48/000000/laptop-e-mail.png" /> Laptops
							</Link>
						</li>
						{/* <li class="header">Another Menu</li> */}
						<li>
							<Link to="/homeEssentials">
								<img src="https://img.icons8.com/color/48/000000/fridge.png" />Electronic Appliances
							</Link>
						</li>
						<li>
							<Link to="/kitchen">
								<img src="https://img.icons8.com/color/48/000000/meal.png" /> Kitchen Essentials
							</Link>
						</li>
						<li>
							<Link to="/books">
								<img src="https://img.icons8.com/color/48/000000/books.png" /> Books
							</Link>
						</li>
						<li>
							<Link to="/sports">
								<img src="https://img.icons8.com/color/48/000000/trainers.png" /> Sport
							</Link>
						</li>
						<li>
							<Link to="/furniture">
								<img src="https://img.icons8.com/color/48/000000/furniture.png" /> Furniture
							</Link>
						</li>
						<li>
							<Link to="/cloths">
								<img src="https://img.icons8.com/color/48/000000/doctors-laboratory-coat.png" /> Cloths
							</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}
