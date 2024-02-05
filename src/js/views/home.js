import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PeopleList from "../component/peopleList";
import PlanetsList from "../component/planetList";
import StarshipsList from "../component/starshipsList";


export const Home = () => {
	const { actions } = useContext(Context);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		setIsLoading(true);
		await Promise.all([actions.getPeople(), actions.getPlanets(), actions.getStarships()]);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading && <h1>Esta cargando...</h1>}
			{!isLoading && (
				<div className="home__container">
					<PeopleList />
					<PlanetsList />
					<StarshipsList />
				</div>
			)}
		</>
	);
};
