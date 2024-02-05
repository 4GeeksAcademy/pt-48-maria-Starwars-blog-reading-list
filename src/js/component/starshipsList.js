import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Starship = ({ name, model, manufacturer }) => {
	const { actions } = useContext(Context);


	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h3>{name}</h3>
				<ul className="starship__properties-list">
					<li>Model: {model}</li>
					<li>Manufacturer: {manufacturer}</li>
				</ul>
				
			</div>
		</div>
	);
};

const StarshipsList = () => {
	const { store } = useContext(Context);

	return (
		<div className="list__container">
			<h2 className="list__title">Starships</h2>
			<div className="list__body">
				{store.starships.map(starship => {
					return <Starship key={starship.id} {...starship} />;
				})}
			</div>
		</div>
	);
};

export default StarshipsList;