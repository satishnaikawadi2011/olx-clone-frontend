import React, { useRef } from 'react';

function ImageUpload(props) {
	const filePickedRef = useRef();

	const pickedHandler = (event) => {
		console.log(event.target);
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
			/>
			<h5 className="text-black letter-spacing text-center">Upload Product Image</h5>
			<div className="image-upload center mt-3">
				<div className="image-upload__preview">
					<img src="" alt="Preview" className="text-black" />
				</div>
				<button className="btn btn-info" type="button" onClick={picKImageHandler}>
					PICK IMAGE
				</button>
			</div>
		</React.Fragment>
	);
}

export default ImageUpload;
