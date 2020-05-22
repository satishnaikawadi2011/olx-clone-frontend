import React, { Component } from 'react';

import { FormWrapper } from './styledComponents/FormWrapper';

export default class Login extends Component {
	handleShow = () => {
		if (this.inputRef.current.type === 'password') {
			this.inputRef.current.type = 'text';
			this.showRef.current.style.color = '#1DA1F2';
			this.showRef.current.textContent = 'HIDE';
		}
		else {
			this.inputRef.current.type = 'password';
			this.showRef.current.style.color = '#111';
			this.showRef.current.textContent = 'SHOW';
		}
	};
	render() {
		this.inputRef = React.createRef();
		this.showRef = React.createRef();
		return (
			<React.Fragment>
				<FormWrapper>
					<div className="container">
						<div className="row">
							<div className="col-md-5 offset-md-4 col-sm-8 container2">
								<header className="text-center text-black">Sign Up Form</header>
								<form>
									<div className="input-field">
										<input
											type="text"
											required
											className="text-black"
											name="name"
											autoComplete="off"
										/>
										<label>Name</label>
									</div>

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
											ref={this.inputRef}
										/>
										<span class="show" onClick={this.handleShow} ref={this.showRef}>
											SHOW
										</span>

										<label>Password</label>
									</div>
									<div className="button">
										<div className="inner" />
										<button>Sign Up</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</FormWrapper>
			</React.Fragment>
		);
	}
}
