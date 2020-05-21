import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { FormWrapper } from './styledComponents/FormWrapper';

export default class Login extends Component {
	render() {
		return (
			<React.Fragment>
				<FormWrapper>
					<div className="container">
						<div className="row">
							<div className="col-md-5 offset-md-4 col-sm-8 container2">
								<header className="text-center text-black">Login Form</header>
								<form>
									<div className="input-field">
										<input
											type="text"
											required
											className="text-black"
											name="email"
											autoComplete="off"
										/>
										<label>Email</label>
									</div>
									<div className="input-field">
										<input
											className="pswrd"
											id="pswrd"
											type="password"
											required
											className="text-black"
											name="password"
											autoComplete="off"
										/>

										<label>Password</label>
									</div>
									<div className="button">
										<div className="inner" />
										<button>LOGIN</button>
									</div>
								</form>
								<div className="signup text-center">
									Not a member?{' '}
									<Link to="/signup" style={{ color: '#33ccff' }}>
										Signup now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</FormWrapper>
			</React.Fragment>
		);
	}
}
