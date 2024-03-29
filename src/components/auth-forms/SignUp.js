import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signupUser, clearErrors } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import ErrorModal from '../shared/ErrorModal';
import LoadingSpinner from '../shared/LoadingSpinner';

import { FormWrapper } from '../styledComponents/FormWrapper';

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

const SignUp = (props) => {
	const { errors, loading } = props.UI;
	const [
		error,
		setError
	] = useState(null);
	useEffect(
		() => {
			if (errors) {
				setError(errors);
			}
		},
		[
			errors
		]
	);
	const clearError = () => {
		setError(null);
		props.clearErrors();
	};
	const onSubmitHandler = (values) => {
		props.signupUser(values, props.history);
	};

	const formik = useFormik({
		initialValues    : {
			name     : '',
			email    : '',
			password : ''
		},
		validationSchema : Yup.object({
			name     : Yup.string().required('Name is required'),
			email    : Yup.string().email('Invalid email format').required('email is required'),
			password : Yup.string()
				.required('password is required')
				.min(8, 'password must contain minimum of 8 letters')
				.max(14, 'password must be shorter than 14 letters')
		}),
		onSubmit         : onSubmitHandler
	});
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
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (loading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<React.Fragment>
				<FormWrapper>
					<motion.div className="container" variants={containerVariant} initial="hidden" animate="visible">
						<div className="row">
							<div className="col-md-5 offset-md-4 col-sm-8 container2 my-card-shadow">
								<header className="text-center text-black">Sign Up Form</header>
								<form onSubmit={formik.handleSubmit}>
									<div className="input-field">
										<input
											type="text"
											className="text-black"
											name="name"
											autoComplete="off"
											onChange={formik.handleChange}
											value={formik.values.name}
											onBlur={formik.handleBlur}
										/>
										{
											formik.touched.name &&
											formik.errors
												.name ? <div className="text-white text-center font-weight-bolder letter-spacing">
												{formik.errors.name}
											</div> :
											null}
										<label>Name</label>
									</div>

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
											type="password"
											name="password"
											autoComplete="off"
											ref={inputRef}
											onChange={formik.handleChange}
											value={formik.values.password}
											onBlur={formik.handleBlur}
										/>
										<span class="show" onClick={handleShow} ref={showRef}>
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
										<button type="submit">Sign Up</button>
									</div>
								</form>
							</div>
						</div>
					</motion.div>
				</FormWrapper>
			</React.Fragment>
		);
	}
};

const mapStateToProps = (state) => ({
	UI : state.UI
});

export default connect(mapStateToProps, { signupUser, clearErrors })(SignUp);
