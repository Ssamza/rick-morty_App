import React, {useState, useEffect} from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/action";


function Card({id,name,species,gender,image,onClose, addFavorite, removeFavorite, myFavorites}) {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);

      }else{
         setIsFav(true);
         addFavorite({id,name,species,gender,image, removeFavorite, myFavorites});
      }
   }

   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )}
         <div className={style.imageContainer}>
         <img className={style.img} src={image} alt="characterCard" />
         <p className={style.caption}>
            <NavLink to={`/detail/${id}`}className={style.nameLink}><h2>{name}</h2></NavLink></p>
         <div className={style.circleWrapper}>
         <div className={style.circle}></div>
         </div>
         </div>
         <div className={style.speciesGenderContainer}>
         <h3><span className={style.species}>Species:{species}</span></h3>
         <h3><span className={style.gender}>Gender:{gender}</span></h3>
         </div>
         <button onClick={() => onClose(id)} className={style.xButton} title={`ID:${id}`}>x</button>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   }
   
}

const mapStateToProps = (state) => {
   return{
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Card);
