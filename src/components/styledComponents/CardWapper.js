import styled from 'styled-components';

export const CardWrapper = styled.div`
	.card {
		margin: auto;
		width: 400px;
		height: 400px;
		border-radius: 40px;
		box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
		cursor: pointer;
		transition: all 0.5s linear;
		position: relative;
		overflow-x: hidden;
	}

	.card .card_image {
		width: inherit;
		height: 325px;
		border-radius: 0;
		margin: 0px;
	}
	.card .card_footer {
		background-color: rgb(80, 80, 80);
		color: white;
		width: inherit;
		height: 75px;
		margin: 0px;
		position: relative;
		border-radius: 0px 0px 40px 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-family: 'Piedra', cursive !important;
		font-size: 1.5rem;
		letter-spacing: 0.1rem;

		/*font-family: 'Sriracha', cursive;*/
	}

	.card .card_image img {
		width: inherit;
		height: inherit;
		border-radius: 40px 40px 0px 0px;
		object-fit: cover;
		overflow: hidden;
		margin: 0px;
	}

	.link {
		text-decoration: none;
	}
	.cart-btn {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: transparent;
		color: var(--mainWhite);
		border: none;
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 0);
		transition: all 1s linear;
		opacity: 0;
		border-radius: 10px 40px 10px 10px;
	}
	&:hover {
		.cart-btn {
			transform: translate(0, 0);
			opacity: 1;
			background-color: rgba(204, 255, 51, 1);
			box-shadow: 5px 5px 20px 1px rgb(192, 192, 192), -5px -5px 20px 1px rgb(192, 192, 192);
		}
		.card_footer {
			box-shadow: 5px 5px 20px 10px rgb(192, 192, 192), -5px -5px 20px 10px rgb(192, 192, 192);
			text-shadow: 0px 5px 5px rgba(204, 255, 51, 1);
		}
	}

	@media only screen and (max-width: 480px) {
		.card {
			width: 80vw;
			height: 300px;
			margin: auto;
			/* margin-left: -20px; */
		}
		.card .card_footer {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.card .card_image {
			width: inherit;
			height: inherit;
			object-fit: cover;
			overflow: hidden;
		}
	}
`;
