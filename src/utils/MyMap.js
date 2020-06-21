import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import styles from './MyMap.module.css';
import { Button } from '../components/styledComponents/Button';
import { useStoreState } from 'easy-peasy';
import { useHistory } from 'react-router-dom';

const API_KEY = 'pk.eyJ1Ijoic2F0aXNobmFpa2F3YWRpIiwiYSI6ImNrYm00MnZ1ZzBsdmYycXA5Ynd2YzI0OHYifQ.tGwRK5F47PdiVO6h3gFb5A';

function MyMap(props) {
	const product = useStoreState((state) => state.prod.detail);
	const [
		viewport,
		setViewport
	] = useState({
		latitude  : product.latitude,
		longitude : product.longitude,
		width     : '100%',
		height    : '100%',
		zoom      : 10
	});

	const history = useHistory();
	const closeMapHandler = () => {
		history.push('/detail');
	};
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
					<Marker latitude={product.latitude} longitude={product.longitude}>
						<div className={styles.marker__btn}>
							<img src="img/marker.svg" alt="Marker" />
						</div>
						{/* <CityPin width={100} /> */}
					</Marker>
				</ReactMapGL>
			</div>
			<div className="text-center mb-5">
				<Button color="#ff0000" hoverColor=" white" onClick={closeMapHandler}>
					Close Map
				</Button>
			</div>
		</React.Fragment>
	);
}

export default MyMap;
