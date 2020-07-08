import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import styles from './MyMap.module.css';
import { Button } from '../components/styledComponents/Button';
import { useStore } from 'easy-peasy';
import { useHistory, useLocation, Link, useParams, Redirect } from 'react-router-dom';
import Axios from 'axios';
import ErrorModal from '../components/shared/ErrorModal';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const API_KEY = 'pk.eyJ1Ijoic2F0aXNobmFpa2F3YWRpIiwiYSI6ImNrYnlyaG4yNzBndTQyeW1yODI4cWVtajMifQ.ntlSxOszlaPMTddHimFmSw';

function MyMap(props) {
	const store = useStore();
	const isLoggedIn = store.getState().auth.isLoggedIn;
	const location = useLocation();
	// const id = location.state.id;
	const { id } = useParams();
	// console.log(id);
	// const product = useStoreState((state) => state.prod.detail);
	const [
		product,
		setProduct
	] = useState({});

	const [
		isLoading,
		setIsLoading
	] = useState(true);
	const [
		error,
		setError
	] = useState(null);
	const clearError = () => {
		setError(null);
	};

	const [
		viewport,
		setViewport
	] = useState({});

	const fetchProduct = () => {
		Axios.get(`http://localhost:5000/api/products/${id}`)
			.then((res) => {
				setProduct(res.data.product);
				setIsLoading(false);
				setViewport({
					latitude  : res.data.product.location.latitude,
					longitude : res.data.product.location.longitude,
					width     : '100%',
					height    : '100%',
					zoom      : 10
				});
			})
			.catch((err) => {
				setIsLoading(false);
				setError(err.response.data.message || 'An Unknown error occured!');
				// console.log(error);
			});
	};

	useEffect(() => {
		fetchProduct();
	}, []);
	if (!isLoggedIn) {
		return <Redirect to="/" />;
	}

	if (error) {
		return <ErrorModal error={error} onCancel={clearError} />;
	}
	else if (isLoading) {
		return <LoadingSpinner />;
	}
	else {
		return (
			<React.Fragment>
				<h2
					className="my-cursive text-center display-4 mt-5 text-capitalize"
					style={{ color: 'red', textShadow: '4px 4px 4px black' }}
				>
					{product.state} , {product.city} , {product.locality}
				</h2>
				<div className={styles.container}>
					<ReactMapGL
						{...viewport}
						mapboxApiAccessToken={API_KEY}
						onViewportChange={(viewport) => setViewport(viewport)}
						mapStyle="mapbox://styles/satishnaikawadi/ckbmg7f1n0x291inyqlt4xa0n"
					>
						<Marker latitude={product.location.latitude} longitude={product.location.longitude}>
							<div className={styles.marker__btn}>
								{/* <img src="img/books.jpg" alt="Marker" /> */}
								<img src="https://img.icons8.com/plasticine/100/000000/marker.png" />
							</div>
							{/* <CityPin width={100} /> */}
						</Marker>
					</ReactMapGL>
				</div>
				<div className="text-center mb-5">
					<Link
						to={{
							pathname : `/detail/${product._id}`,
							state    : {
								id : product._id
							}
						}}
					>
						<Button color="#ff0000" hoverColor=" white">
							Close Map
						</Button>
					</Link>
				</div>
			</React.Fragment>
		);
	}
}

export default MyMap;
