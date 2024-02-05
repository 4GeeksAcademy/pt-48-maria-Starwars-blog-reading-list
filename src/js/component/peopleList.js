import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Person = ({ name, gender, hair_color, eye_color }) => {
	const { actions } = useContext(Context);

	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h3>{name}</h3>
				<ul className="person__properties-list">
					<li>Gender: {gender}</li>
					<li>Hair Color: {hair_color}</li>
					<li>Eye Color: {eye_color}</li>
				</ul>
				
			</div>
		</div>
	);
};

const PeopleList = () => {
	const { store } = useContext(Context);

	return (
		<div className="list__container">
			<h2 className="list__title">Characters</h2>
			<div className="list__body">
				{store.people.map(person => {
					return <Person key={person.id} {...person} />;
				})}
			</div>
		</div>
	);
};

export default PeopleList;