import React, { useRef } from 'react';
import styled from 'styled-components';
import Alert from '../shared/Alert';
import { useFormik, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import ImageUpload from '../form/ImageUpload';
import MySelect from '../form/MySelect';

const options = [
	'Mobile',
	'Laptop',
	'Sport_Equipments',
	'Kitchen_Appliances',
	'Cloth',
	'Furniture',
	'Book',
	'Electric_Appliances'
];
const headerVariant = {
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

const formVariant = {
	hidden  : {
		x : '100vw'
	},
	visible : {
		x          : 0,
		transition : {
			type      : 'spring',
			duration  : 1,
			stiffness : 20
		}
	}
};

const validationSchema = Yup.object({
	category    : Yup.string().required('Please select category'),
	brand       : Yup.string().required(' Brand is required'),
	model       : Yup.string().required('model is required'),
	title       : Yup.string().required('Title is required').min(150, 'Title should be at least 150 characters'),
	description : Yup.string().required('Description is required').min(600, 'Title should be at least 600 characters'),
	price       : Yup.number()
		.required('price is required')
		.positive('price should be a positive integer')
		.integer('price should be a positive integer'),
	state       : Yup.string().required('State is required'),
	city        : Yup.string().required('City is required'),
	locality    : Yup.string().required('Locality is required'),
	zip         : Yup.number()
		.required('ZIP Code is required')
		.positive('zip code should be a positive integer')
		.integer('Zip code should be a positive integer')
	// image       : Yup.object().shape({
	// 	file : Yup.mixed().required('A product image is required')
});

const initialValues = {
	category    : '',
	brand       : '',
	model       : '',
	title       : '',
	description : 'this is desc',
	price       : '',
	state       : '',
	city        : '',
	locality    : '',
	zip         : '',
	image       : ''
};

const MyForm = () => {
	const inputHandler = (file) => {
		// console.log(file);
		formik.setFieldValue('image', file, false);
	};
	const onSubmitHandler = (values) => {
		console.log(values);
		// let finalValues = { ...values, image: { ...myfile } };
	};

	const formik = useFormik({
		initialValues    : initialValues,
		onSubmit         : onSubmitHandler,
		validationSchema : validationSchema
	});
	return (
		<React.Fragment>
			<motion.h1
				className="text-heading1 text-center"
				variants={headerVariant}
				initial="hidden"
				animate="visible"
			>
				Post Your Ad
			</motion.h1>
			<FormWrapper>
				<motion.form variants={formVariant} initial="hidden" animate="visible" onSubmit={formik.handleSubmit}>
					<MySelect
						name="category"
						optionarray={options}
						label="Select Category"
						onChange={formik.handleChange}
						value={formik.values.category}
						onBlur={formik.handleBlur}
					/>
					{
						formik.touched.category && formik.errors.category ? <Alert status="danger">
							{formik.errors.category}
						</Alert> :
						null}
					<Input
						label="Brand"
						name="brand"
						placeholder="Enter Product's brand"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.brand}
						onBlur={formik.handleBlur}
						myformik={formik}
					/>
					{
						formik.touched.brand && formik.errors.brand ? <Alert status="danger">
							{formik.errors.brand}
						</Alert> :
						null}
					<Input
						label="Model"
						name="model"
						placeholder="Enter Product's Model"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.model}
						onBlur={formik.handleBlur}
					/>
					{
						formik.touched.model && formik.errors.model ? <Alert status="danger">
							{formik.errors.model}
						</Alert> :
						null}
					<Input
						label="Title"
						name="title"
						placeholder="Add title"
						type="text"
						onChange={formik.handleChange}
						value={formik.values.title}
						onBlur={formik.handleBlur}
						helperText="Mention the key features of your item (e.g. brand, model, age, type)"
					/>
					{
						formik.touched.title && formik.errors.title ? <Alert status="danger">
							{formik.errors.title}
						</Alert> :
						null}

					<TextArea
						label="Description"
						name="description"
						rows="6"
						onChange={formik.handleChange}
						value={formik.values.description}
						onBlur={formik.handleBlur}
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
						label="Set Price (in Rs)"
						name="price"
						onChange={formik.handleChange}
						value={formik.values.price}
						onBlur={formik.handleBlur}
					/>
					{
						formik.touched.price && formik.errors.price ? <Alert status="danger">
							{formik.errors.price}
						</Alert> :
						null}
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-lg-4">
								<ImageUpload
									name="image"
									onChange={formik.handleChange}
									onInput={inputHandler}
									onBlur={formik.handleBlur}
								/>
								{
									formik.touched.image && formik.errors.image ? <Alert status="danger">
										{formik.errors.image}
									</Alert> :
									null}
							</div>
							<div className="col-sm-12 col-lg-8">
								<h5 className="letter-spacing text-black">Address Info</h5>
								<Input
									name="state"
									label="State"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.state}
									onBlur={formik.handleBlur}
								/>
								{
									formik.touched.state && formik.errors.state ? <Alert status="danger">
										{formik.errors.state}
									</Alert> :
									null}
								<Input
									name="city"
									label="City"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.city}
									onBlur={formik.handleBlur}
								/>
								{
									formik.touched.city && formik.errors.city ? <Alert status="danger">
										{formik.errors.city}
									</Alert> :
									null}
								<Input
									name="locality"
									label="Locality"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.locality}
									onBlur={formik.handleBlur}
								/>
								{
									formik.touched.locality && formik.errors.locality ? <Alert status="danger">
										{formik.errors.locality}
									</Alert> :
									null}
								<Input
									name="zip"
									label="Zip Code"
									type="text"
									onChange={formik.handleChange}
									value={formik.values.zip}
									onBlur={formik.handleBlur}
								/>
								{
									formik.touched.zip && formik.errors.zip ? <Alert status="danger">
										{formik.errors.zip}
									</Alert> :
									null}
							</div>
							<button
								type="submit"
								className="mt-5 mb-5 btn btn-success btn-block"
								style={{ marginRight: 'auto', marginLeft: 'auto' }}
							>
								Submit
							</button>
						</div>
					</div>
				</motion.form>
			</FormWrapper>
		</React.Fragment>
	);
};

export default MyForm;

const FormWrapper = styled.div`
	@media only screen and (max-width: 768px) {
		margin-left: 20px;
	}
	margin-left: 80px;
	margin-right: 20px;
`;
