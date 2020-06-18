import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FormWrapper } from './styledComponents/FormWrapper';

const containerVariant = {
	hidden  : {
		x : '-100vw'
	},
	visible : {
		x          : 0,
		transition : {
			type     : 'spring',
			duration : 1
		}
	}
};

const Login = () => {
	const inputRef = useRef();
	const showRef = useRef();

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
	return (
		<React.Fragment>
			<FormWrapper>
				<motion.div className="container" variants={containerVariant} initial="hidden" animate="visible">
					<div className="row">
						<div className="col-md-5 offset-md-4 col-sm-8 container2 my-card-shadow">
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
										ref={inputRef}
									/>
									<span className="show" onClick={handleShow} ref={showRef}>
										SHOW
									</span>

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
				</motion.div>
			</FormWrapper>
		</React.Fragment>
	);
};
export default Login;
