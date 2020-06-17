import React, { Component } from 'react';
import './Footer.css';
const Footer = (props) => {
	return (
		<footer>
			<div className="main-content">
				<div className="left box">
					<h2>About us</h2>
					<div className="content">
						<p>
							'Meri Dukan ' is a very popular online platform to sell and buy various shopping items on
							great discount deals. It is very trustworthy platform and it has various online services to
							give better user experience
						</p>
						<div className="social">
							<a href="https://facebook.com/coding.np">
								<img src="https://img.icons8.com/color/48/000000/facebook.png" />
							</a>
							<a href="#">
								<img src="https://img.icons8.com/color/48/000000/twitter.png" />
							</a>
							<a href="https://www.instagram.com/satish_011e/">
								<img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
							</a>
							<a href="https://youtube.com/c/codingnepal">
								<img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
							</a>
						</div>
					</div>
				</div>

				<div className="center box">
					<h2>Address</h2>
					<div className="content">
						<div className="place">
							<img src="https://img.icons8.com/bubbles/50/000000/home-page.png" />
							<span className="text">Birendranagar, Surkhet</span>
						</div>
						<div className="phone">
							<img src="https://img.icons8.com/doodle/48/000000/phone--v1.png" />
							<span className="text">+089-765432100</span>
						</div>
						<div className="email">
							<img src="https://img.icons8.com/dusk/48/000000/filled-message.png" />
							<span className="text">abc@example.com</span>
						</div>
					</div>
				</div>

				<div className="right box">
					<h2>Contact us</h2>
					<div className="content">
						<form action="#">
							<div className="email">
								<div className="text">Email *</div>
								<input type="email" required />
							</div>
							<div className="msg">
								<div className="text">Message *</div>
								<textarea rows="2" cols="25" required />
							</div>
							<div className="btn btn-block">
								<button type="submit">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="bottom">
				<center>
					<span className="credit">
						Created By <a href="https://youtube.com/c/codingnepal">SatyNaikawadi</a> |{' '}
					</span>
					<span>&copy;</span>
					<span> 2020 All rights reserved.</span>
				</center>
			</div>
		</footer>
	);
};

export default Footer;
