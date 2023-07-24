import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import bufferingGif from '../../assets/loading-buffering.gif';
import style from './Detail.module.css';

const Detail = () => {
	const { id } = useParams();

	const [character, setCharacter] = useState({});

	const URL_BASE = 'https://rickandmortyapi.com/api';
	const KEY = '7fe437112629.ac565859637cc0900f47';

	useEffect(() => {
		fetch(`${URL_BASE}/character/${id}`)
			.then((response) => response.data)
			.then((data) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert('No characters found with the ID');
				}
			});
		return setCharacter({});
	}, [id]);

	return (
		<div>
			{character.name ? (
				<>
					<div className={style.backButtonContainer}>
						<button className={style.backButton} onClick={backButton}>
							Back
						</button>
					</div>
					<div className={style.detailContainer}>
						{/* <div className={style.nameContainer}>
          </div> */}
						<div className={style.props}>
							<h2>{character.name}</h2>
							<p>GENDER: {character.gender}</p>
							<p>STATUS: {character.status}</p>
							<p>SPECIES: {character.species}</p>
							<p>BIRTHPLACE: {character.origin?.name}</p>
							<p>ID: {character.id}</p>
						</div>
						<div className={style.imgContainer}>
							<img src={character.image} alt='img' className={style.image} />
						</div>
					</div>
				</>
			) : (
				<div className={style.gifContainer}>
					<h2>Character is loading...</h2>
					<img src={bufferingGif} alt='details...' className={style.gif} />
				</div>
			)}
		</div>
	);
};

export default Detail;
