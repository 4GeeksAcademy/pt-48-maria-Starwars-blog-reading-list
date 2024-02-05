import PEOPLE_API from "./peopleApi";
import PLANETS_API from "./planetsApi";
import STARSHIPS_API from "./starshipsApi";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			likes: [],
		},
		actions: {
			getPeople: async() => {
				const store = getStore();
				const peopleProperties = await PEOPLE_API.get();
				const people = await Promise.all(peopleProperties.map(async ({uid}) => {
					const {description, uid: id, properties} = await PEOPLE_API.getById(uid);
					return{description, id, ...properties}
				}));
				setStore({...store, people})
			},
			getPlanets: async() => {
				const store = getStore();
				const planetsProperties = await PLANETS_API.get();
				const planets = await Promise.all(planetsProperties.map(async ({uid}) => {
					const {description, uid: id, properties} = await PLANETS_API.getById(uid);
					return{description, id, ...properties}
				}));
				
				setStore({...store, planets})
			},
			getStarships: async() => {
				const store = getStore();
				const starshipsProperties = await STARSHIPS_API.get();
				const starships = await Promise.all(starshipsProperties.map(async ({uid}) => {
					const {description, uid: id, properties} = await STARSHIPS_API.getById(uid);
					return{description, id, ...properties}
				}));
				
				setStore({...store, starships})
			},
		}
	};
};

export default getState;
