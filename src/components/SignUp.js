import React, { Component, useRef } from 'react';

import { FormWrapper } from './styledComponents/FormWrapper';

const SignUp = () => {
	const handleShow = () => {
		if (inputRef.current.type === 'password') {
			inputRef.current.type = 'text';
			showRef.current.style.color = '#1DA1F2';
			showRef.current.textContent = 'HIDE';
		}
		else {
			inputRef.current.type = 'password';
			showRef.current.style.color = '#111';
			showRef.current.textContent = 'SHOW';
		}
	};

	const inputRef = useRef();
	const showRef = useRef();
	return (
		<React.Fragment>
			<FormWrapper>
				<div className="container">
					<div className="row">
						<div className="col-md-5 offset-md-4 col-sm-8 container2 my-card-shadow">
							<header className="text-center text-black">Sign Up Form</header>
							<form>
								<div className="input-field">
									<input type="text" required className="text-black" name="name" autoComplete="off" />
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
										ref={inputRef}
									/>
									<span class="show" onClick={handleShow} ref={showRef}>
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
};
export default SignUp;
