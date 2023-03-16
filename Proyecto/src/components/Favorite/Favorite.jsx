import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorite.module.css";
import { orderCards, filterCards } from "../../redux/action";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  function handleOrderChange(event) {
    dispatch(orderCards(event.target.value));
  }

  function handleFilterChange(event) {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div>
      <div className={style.selectorContainer}>
        <select name="orderCards" onChange={handleOrderChange}>
          <option value="Ascendente">Upward</option>
          <option value="Descendente">Downward</option>
        </select>
        <select name="filterCards" onChange={handleFilterChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
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

export default Favorites;
