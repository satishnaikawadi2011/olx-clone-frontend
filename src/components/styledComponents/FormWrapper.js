import styled from 'styled-components';

export const FormWrapper = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Noto+Sans|Open+Sans:400,700&display=swap');
	* {
		margin: 0;
		padding: 0;
		border-radius: 5px;
		box-sizing: border-box;
	}
	body {
		height: 100vh;
		display: flex;
		align-items: center;
		text-align: center;
		font-family: sans-serif;
		justify-content: center;
		background: white;
		background-size: cover;
		background-position: center;
		z-index: -2;
	}
	.container2 {
		position: relative;
		width: 400px;
		background: linear-gradient(to bottom, #7870f3 0%, #b225c8 100%);
		top: 50%;
		left: 50%;
		margin-top: 100px;
		margin-bottom: 100px;
		padding: 60px 40px;
		border-radius: 20px;
	}
	@media only screen and (max-width: 600px) {
		.container2 {
			left: 10%;
			overflow: hidden;
		}
	}
	header {
		font-size: 40px;
		margin-bottom: 60px;
		font-family: 'Montserrat', sans-serif;
	}
	.input-field,
	form .button {
		margin: 25px 0;
		position: relative;
		height: 50px;
		width: 100%;
	}
	.input-field input {
		height: 100%;
		width: 100%;
		border: 1px solid silver;
		padding-left: 15px;
		outline: none;
		font-size: 19px;
		transition: .4s;
	}
	input:focus {
		border: 1px solid #1da1f2;
	}
	.input-field label,
	span.show {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.input-field label {
		left: 15px;
		pointer-events: none;
		color: grey;
		font-size: 18px;
		transition: .4s;
	}

	input:valid ~ span.show {
		visibility: visible;
	}
	input:focus ~ label,
	input:valid ~ label {
		transform: translateY(-50px);
		background: transparent;
		font-size: 16px;
		color: #33ccff;
	}
	// form .button {
	// 	margin-top: 30px;
	// 	overflow: hidden;
	// 	z-index: -1;
	// }
	// .button .inner {
	// 	position: absolute;
	// 	height: 100%;
	// 	width: 300%;
	// 	left: -100%;
	// 	z-index: -10;
	// 	transition: all .4s;
	// }
	.button:hover .inner {
		left: 0;
		background-color: #33ccff;
	}
	.button:hover button {
		color: white;
		background-color: #33ccff;
	}
	.button button {
		width: 100%;
		height: 100%;
		border: none;
		background: none;
		outline: none;
		border: 1px solid #33ccff;
		color: #33ccff;
		font-size: 20px;
		cursor: pointer;
		font-family: 'Montserrat', sans-serif;
	}

	span.show {
		right: 20px;
		color: #111;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		user-select: none;
		visibility: hidden;
		font-family: 'Open Sans', sans-serif;
	}
	.signup {
		margin-top: 50px;
		font-family: 'Noto Sans', sans-serif;
	}
	.signup a {
		color: #33ccff;
		text-decoration: none;
	}
	.signup a:hover {
		text-decoration: underline;
	}
`;
