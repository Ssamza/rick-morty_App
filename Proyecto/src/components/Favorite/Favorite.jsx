import Card from "../Card/Card";
import { useSelector } from "react-redux";
import style from "./Favorite.module.css";

const Favorites = () => {
    
    const favorites = useSelector(state => state.myFavorites)

    return(
        <div>
            <div className={style.favoriteCardsContainer}>
            {
                favorites.map(({id,name,species,gender,image}) => {
                    return (
                    <Card
                    key={id}
                    id = {id}
                    name = {name}
                    species = {species}
                    gender = {gender}
                    image = {image}
                    />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Favorites;