import React, { useRef, useState, useEffect } from 'react';

function ImageUpload(props) {
	const [
		file,
		setFile
	] = useState();
	const [
		previewUrl,
		setPreviewUrl
	] = useState();
	const [
		isValid,
		setIsValid
	] = useState(false);
	const filePickedRef = useRef();

	useEffect(
		() => {
			if (!file) {
				return;
			}
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setPreviewUrl(fileReader.result);
			};
			fileReader.readAsDataURL(file);
		},
		[
			file
		]
	);

	const pickedHandler = (event) => {
		let pickedFile;
		let fileIsValid = isValid;
		if (event.currentTarget.files && event.currentTarget.files.length === 1) {
			pickedFile = event.currentTarget.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		}
		else {
			setIsValid(false);
			fileIsValid = false;
		}
		props.onInput(pickedFile);
	};

	const picKImageHandler = () => {
		filePickedRef.current.click();
	};
	return (
		<React.Fragment>
			<input
				type="file"
				accept=".jpg,.png,.jpeg"
				id={props.name}
				name={props.name}
				style={{ display: 'none' }}
				ref={filePickedRef}
				onClick={pickedHandler}
				onChange={pickedHandler}
			/>
			<h5 className="text-black letter-spacing text-center">Upload Product Image</h5>
			<div className="image-upload center mt-3">
				<div className="image-upload__preview">
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					{!previewUrl && <p className="text-black">Please pick an image.</p>}
				</div>
				<button className="btn btn-info" type="button" onClick={picKImageHandler}>
					PICK IMAGE
				</button>
			</div>
		</React.Fragment>
	);
}

export default ImageUpload;
