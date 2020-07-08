import React from 'react';
import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingSpinner = (props) => {
	return (
		<LoaderWrapper>
			<FadeLoader color="white" />
		</LoaderWrapper>
	);
};

export default LoadingSpinner;

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	position: absolute;
	background: rgba(0, 0, 0, 0.9);
	z-index: 1000;
`;
