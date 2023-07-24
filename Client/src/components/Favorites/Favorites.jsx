import Card from '../Card/Card';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';
import style from './Favorites.module.css';

const Favorites = () => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.myFavorites);
	// eslint-disable-next-line no-unused-vars

	const handleOrderChange = (event) => {
		dispatch(orderCards(event.target.value));
	};

	const handleFilterChange = (event) => {
		dispatch(filterCards(event.target.value));
	};

	return (
		<div>
			<div className={style.selectorContainer}>
				<select name='orderCards' onChange={handleOrderChange}>
					<option value='Ascendente'>Upward</option>
					<option value='Descendente'>Downward</option>
				</select>
				<select name='filterCards' onChange={handleFilterChange}>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
					<option value='Genderless'>Genderless</option>
					<option value='unknown'>Unknown</option>
				</select>
			</div>
			<div className={style.favoriteCardsContainer}>
				{favorites.map(({ id, name, species, gender, image }) => {
					return (
						<Card
							key={id}
							id={id}
							name={name}
							species={species}
							gender={gender}
							image={image}
						/>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

export default connect(mapStateToProps, null)(Favorites);
