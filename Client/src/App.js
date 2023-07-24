// import Card from "./components/Card/Card.jsx";
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import style from './App.module.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error404 from './Error404.js';
import Form from './components/Form/Form.jsx';
import Favorite from './components/Favorites/Favorites.jsx';

function App() {
	//Hooks

	const [characters, setCharacters] = useState([]);
	const [access, setAccess] = useState(false);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	//Credenciales

	const login = async (userData) => {
		try {
			const { email, password } = userData;
			const URL = 'http://localhost:3001/login';
			const { data } = await axios(
				URL + `?email=${email}&password=${password}`
			);
			const { access } = data;
			setAccess(access);
			access && navigate('/home');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access, navigate]);

	const onSearch = (id) => {
		const URL_BASE = 'https://rickandmortyapi.com/api/character';
		const KEY = '7fe437112629.ac565859637cc0900f47';

		const characterExists = characters.some((char) => char.id === id);

		//Event

		if (!characterExists) {
			fetch(`${URL_BASE}/${id}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.name) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert('ID not recognized!');
					}
				});
		} else {
			window.alert('The character is already summoned!');
		}
	};

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	return (
		<div className='App' style={{ padding: '25px' }}>
			{pathname !== '/' && (
				<div className={style.nav}>
					<Nav onSearch={onSearch} />
				</div>
			)}
			{pathname !== '/' && <hr />}
			<Routes>
				<Route path='/' element={<Form login={login} />} />
				<Route path='/favorites' element={<Favorite />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/home'
					element={<Cards characters={characters} onClose={onClose} />}
				/>
				<Route path='/detail/:detailId' element={<Detail />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</div>
	);
}

export default App;
