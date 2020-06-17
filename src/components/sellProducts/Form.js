import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../shared/Alert';
import Input from '../form/Input';
import TextArea from '../form/TextArea';
import ImageUpload from '../form/ImageUpload';

export class Form extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="text-heading1 text-center">Post Your Ad</h1>
				<FormWrapper>
					<form>
						<div class="form-group">
							<label htmlFor="category" className="text-black mr-3">
								{' '}
								Select Category
							</label>
							<select classname="form-control" id="category" name="category" style={{ color: 'black' }}>
								<option className="text-black">Mobiles</option>
								<option className="text-black">Laptops</option>
								<option className="text-black">Sport Equipments</option>
								<option className="text-black">Cloths</option>
								<option className="text-black">Furniture</option>
								<option className="text-black">Electric Appliances</option>
								<option className="text-black">Kitchen Appliances</option>
								<option className="text-black">Books</option>
							</select>
						</div>
						<Input label="Brand" name="brand" placeholder="Enter Product's brand" type="text" />
						<Input label="Model" name="model" placeholder="Enter Product's Model" type="text" />
						<Input label="Title" name="title" placeholder="Add title" type="text">
							Mention the key features of your item (e.g. brand, model, age, type)
						</Input>
						<TextArea label="Description" name="description" rows="6">
							Include condition, features and reason for selling
						</TextArea>
						<Input type="text" label="Set Price (in Rs)" name="price" />
						<div className="container">
							<div className="row">
								<div className="col-sm-12 col-lg-4">
									<ImageUpload name="product-img" />
								</div>
								<div className="col-sm-12 col-lg-8">
									<h5 className="letter-spacing text-black">Address Info</h5>
									<Input name="state" label="State" type="text" />
									<Input name="city" label="City" type="text" />
									<Input name="locality" label="Locality" type="text" />
									<Input name="zip" label="Zip Code" type="text" />
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
					</form>
				</FormWrapper>
			</React.Fragment>
		);
	}
}

export default Form;

const FormWrapper = styled.div`
	@media only screen and (max-width: 768px) {
		margin-left: 20px;
	}
	margin-left: 80px;
	margin-right: 20px;
`;
