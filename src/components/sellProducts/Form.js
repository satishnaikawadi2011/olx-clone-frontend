import React, { Component } from 'react';
import styled from 'styled-components';

export class Form extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className="text-heading1 text-center">Post Your Ad</h1>
				<FormWrapper>
					<form>
						<div className="form-group">
							<label htmlFor="title" className="text-black">
								Title
							</label>
							<input type="text" className="form-control" name="title" placeholder="Add title" required />
							<small className="text-muted">
								Mention the key features of your item (e.g. brand, model, age, type)
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="description" className="text-black">
								Add Description
							</label>
							<textarea className="form-control" name="description" rows="6" required />
							<small className="text-muted">Include condition, features and reason for selling</small>
						</div>
						<div className="form-group">
							<label htmlFor="price" className="text-black">
								Set a Price<small className="text-muted ml-2">( in Rs )</small>
							</label>
							<input className="form-control" name="price" type="number" required />
						</div>
						<div className="container">
							<div className="row">
								<div className="form-group col-8  col-lg-4">
									<label htmlFor="images" className="text-black mb-3">
										Upload Multiple Images
									</label>
									<div
										style={{
											position       : 'relative',
											overflow       : 'hidden',
											width          : '300px',
											height         : '300px',
											border         : '2px dashed skyblue',
											display        : 'flex',
											alignItems     : 'center',
											justifyContent : 'center'
										}}
									>
										<input
											className="form-control"
											name="images"
											type="file"
											multiple
											required
											style={{
												width          : '240px',
												height         : '240px',
												display        : 'flex',
												alignItems     : 'center',
												justifyContent : 'center',
												opacity        : '0',
												position       : 'relative',
												top            : '0',
												left           : '0',
												bottom         : '0',
												zIndex         : '999'
											}}
										/>
										{/* <p className="text-black">Drag your files here or click in this area.</p> */}
										<img
											src="https://img.icons8.com/cute-clipart/50/000000/image-file.png"
											style={{ position: 'absolute' }}
										/>
									</div>
								</div>
								<div className="form-group col-lg-6 offset-col-lg-2 col-8 mt-4">
									<label htmlFor="state" className="text-black mt-2">
										Confirm Your lacation <br />State
									</label>
									<input className="form-control" type="text" name="state" required />
									<label htmlFor="city" className="text-black mt-2">
										City
									</label>
									<input className="form-control" type="text" name="city" required />
									<label htmlFor="locality" className="text-black mt-2">
										Locality
									</label>
									<input className="form-control" type="text" name="localoty" required />
									<label htmlFor="zip" className="text-black mt-2">
										Zip Code
									</label>
									<input className="form-control" type="number" name="zip" required />
								</div>
							</div>
						</div>
						<input type="submit" className="btn btn-success mb-5 ml-5" value="Post Now" />
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