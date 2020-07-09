import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Input from '../../form/Input';
import TextArea from '../../form/TextArea';
import { useFormik } from 'formik';
import Alert from '../../shared/Alert';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { updateMyProduct, clearErrors } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';
import ErrorModal from '../../shared/ErrorModal';

const formVariant = {
	hidden  : {
		y : '100vh'
	},
	visible : {
		y          : 0,
		transition : {
			type     : 'spring',
			duration : 2
		}
	}
};

function UpdateProduct(props) {
	const { loading, errors } = props.UI;
	const location = useLocation();
	const { title, description, contact, state, city, locality, zip, _id } = location.state.product;
	const [
		error,
		setError
	] = useState(null);
	const clearError = () => {
		setError(null);
		props.clearErrors();
	};
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
	const onSubmitHandler = (values) => {
		props.updateMyProduct(_id, values);
	};

	const initialValues = {
		title,
		description,
		contact,
		state,
		city,
		locality,
		zip
	};

	const validationSchema = Yup.object({
		title       : Yup.string()
			.required('Title is required')
			.min(250, 'Title should be at least 250 characters')
			.max(350, 'Title should not exceed 350 letters'),
		description : Yup.string()
			.required('Description is required')
			.min(650, 'Title should be at least 650 characters')
			.max(750, 'Title should not exceed 750 letters'),
		state       : Yup.string().required('State is required'),
		city        : Yup.string().required('City is required'),
		locality    : Yup.string().required('Locality is required'),
		zip         : Yup.number()
			.required('ZIP Code is required')
			.positive('zip code should be a positive integer')
			.integer('Zip code should be a positive integer'),
		contact     : Yup.number()
			.required('Mobile Number is required for contact information')
			.positive('mobile number should be a positive integer')
			.integer('mobile number should be a positive integer')
	});

	const formik = useFormik({
		initialValues    : initialValues,
		validationSchema : validationSchema,
		onSubmit         : onSubmitHandler
	});
	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else {
		return (
			<React.Fragment>
				<div className="container">
					<motion.div
						className="row justify-content-center"
						variants={formVariant}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-heading2 text-center mt-3 display-4 mb-4"> update your product</h2>
						<div className=" col-lg-8 col-md-10 col-12">
							<form onSubmit={formik.handleSubmit}>
								<TextArea
									rows="4"
									label="Key Features"
									name="title"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.title}
								>
									Mention the key features of your item (e.g. brand, model, age, type)
								</TextArea>
								{
									formik.touched.title && formik.errors.title ? <Alert status="danger">
										{formik.errors.title}
									</Alert> :
									null}
								<TextArea
									rows="6"
									label="Description"
									name="description"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.description}
								>
									Include condition, features and reason for selling
								</TextArea>
								{
									formik.touched.description && formik.errors.description ? <Alert status="danger">
										{formik.errors.description}
									</Alert> :
									null}
								<Input
									type="text"
									label="Mobile"
									name="contact"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.contact}
								/>
								{
									formik.touched.contact && formik.errors.contact ? <Alert status="danger">
										{formik.errors.contact}
									</Alert> :
									null}
								<Input
									type="text"
									label="State"
									name="state"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.state}
								/>
								{
									formik.touched.state && formik.errors.state ? <Alert status="danger">
										{formik.errors.state}
									</Alert> :
									null}
								<Input
									type="text"
									label="City"
									name="city"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.city}
								/>
								{
									formik.touched.city && formik.errors.city ? <Alert status="danger">
										{formik.errors.city}
									</Alert> :
									null}
								<Input
									type="text"
									label="Locality"
									name="locality"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.locality}
								/>
								{
									formik.touched.locality && formik.errors.locality ? <Alert status="danger">
										{formik.errors.locality}
									</Alert> :
									null}
								<Input
									type="text"
									label="Zip Code"
									name="zip"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.zip}
								/>
								{
									formik.touched.zip && formik.errors.zip ? <Alert status="danger">
										{formik.errors.zip}
									</Alert> :
									null}
								<button
									type="submit"
									className="mt-5 mb-5 btn btn-dark btn-block"
									style={{ marginRight: 'auto', marginLeft: 'auto' }}
								>
									Update
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	UI : state.UI
});

export default connect(mapStateToProps, { updateMyProduct })(UpdateProduct);
