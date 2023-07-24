import { Link, NavLink } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import style from './Card.module.css';

function Card({ id, name, species, gender, image, onClose, myFavorites }) {
	const [isFav, setIsFav] = useState(false);
	const dispatch = useDispatch();

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			removeFavorite(id);
		} else {
			setIsFav(true);
			addFavorite({ id, name, species, gender, image, onClose });
		}
	};

	useEffect(() => {
		if (myFavorites) {
			myFavorites.forEach((fav) => {
				if (fav.id === id) {
					setIsFav(true);
				}
			});
		}
	}, [id, myFavorites]);

	return (
		<div className={style.container}>
			{isFav ? (
				<button onClick={handleFavorite}>❤️</button>
			) : (
				<button onClick={handleFavorite}>🤍</button>
			)}
			<div className={style.imageContainer}>
				<img className={style.img} src={image} alt='characterCard' />
				<p className={style.caption}>
					<NavLink to={`/detail/${id}`} className={style.nameLink}>
						<h2>{name}</h2>
					</NavLink>
				</p>
				<div className={style.circleWrapper}>
					<div className={style.circle}></div>
				</div>
			</div>
			<div className={style.speciesGenderContainer}>
				<h3>
					<span className={style.species}>Species:{species}</span>
				</h3>
				<h3>
					<span className={style.gender}>Gender:{gender}</span>
				</h3>
			</div>
			<button
				onClick={() => onClose(id)}
				className={style.xButton}
				title={`ID:${id}`}
			>
				x
			</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (character) => {
			dispatch(addFav(character));
		},
		removeFavorite: (id) => {
			dispatch(removeFavorite(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
