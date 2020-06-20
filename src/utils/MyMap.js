import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import styles from './MyMap.module.css';

const API_KEY = 'pk.eyJ1Ijoic2F0aXNobmFpa2F3YWRpIiwiYSI6ImNrYm00MnZ1ZzBsdmYycXA5Ynd2YzI0OHYifQ.tGwRK5F47PdiVO6h3gFb5A';

function MyMap(props) {
	const [
		viewport,
		setViewport
	] = useState({
		latitude  : props.cordinates.latitude,
		longitude : props.cordinates.longitude,
		width     : '100vw',
		height    : '100vh',
		zoom      : 10
	});
	return (
		<React.Fragment>
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={API_KEY}
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle="mapbox://styles/satishnaikawadi/ckbmg7f1n0x291inyqlt4xa0n"
			>
				<Marker latitude={props.cordinates.latitude} longitude={props.cordinates.longitude}>
					<div className={styles.marker__btn}>
						<img src="img/marker.svg" alt="Marker" />
					</div>
					{/* <CityPin width={100} /> */}
				</Marker>
			</ReactMapGL>
		</React.Fragment>
	);
}

export default MyMap;
