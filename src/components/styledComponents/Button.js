import styled from 'styled-components';

export const Button = styled.button`
	text-transform: capitalize;
	font-size: 1.4 rem;
	background: transparent;
	border: 0.05rem solid ${(props) => props.color};
	border-color: ${(props) => props.color};
	color: ${(props) => props.color};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${(props) => props.color};
		color: ${(props) => props.hoverColor};
	}
	&:focus {
		outline: none;
	}
`;
