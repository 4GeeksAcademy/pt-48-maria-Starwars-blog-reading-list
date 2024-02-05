import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Planet = ({ name, climate, terrain }) => {
	const { actions } = useContext(Context);


	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h3>{name}</h3>
				<ul className="planet__properties-list">
					<li>Climate: {climate}</li>
					<li>Terrain: {terrain}</li>
				</ul>
				
			</div>
		</div>
	);
};

const PlanetsList = () => {
	const { store } = useContext(Context);

	return (
		<div className="list__container">
			<h2 className="list__title">Planets</h2>
			<div className="list__body">
				{store.planets.map(planet => {
					return <Planet key={planet.id} {...planet} />;
				})}
			</div>
		</div>
	);
};

export default PlanetsList;