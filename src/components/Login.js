import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FormWrapper } from './styledComponents/FormWrapper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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
	const onSubmitHandler = (values) => {
		console.log(values);
	};

	const formik = useFormik({
		initialValues    : {
			email    : '',
			password : ''
		},
		validationSchema : Yup.object({
			email    : Yup.string().email('Invalid email format').required('email is required'),
			password : Yup.string()
				.required('password is required')
				.min(8, 'password must contain minimum of 8 letters')
				.max(14, 'password must be shorter than 14 letters')
		}),
		onSubmit         : onSubmitHandler
	});

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
							<form onSubmit={formik.handleSubmit}>
								<div className="input-field">
									<input
										type="text"
										className="text-black"
										name="email"
										autoComplete="off"
										onChange={formik.handleChange}
										value={formik.values.email}
										onBlur={formik.handleBlur}
									/>
									{
										formik.touched.email &&
										formik.errors
											.email ? <div className="text-white text-center font-weight-bolder letter-spacing">
											{formik.errors.email}
										</div> :
										null}
									<label>Email</label>
								</div>
								<div className="input-field">
									<input
										className="pswrd text-black"
										id="pswrd"
										type="passwor"
										name="password"
										autoComplete="off"
										onChange={formik.handleChange}
										value={formik.values.password}
										onBlur={formik.handleBlur}
										ref={inputRef}
									/>
									<span className="show" onClick={handleShow} ref={showRef}>
										SHOW
									</span>
									{
										formik.touched.password &&
										formik.errors
											.password ? <div className="text-white text-center font-weight-bolder letter-spacing">
											{formik.errors.password}
										</div> :
										null}
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
