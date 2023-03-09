import React from "react";
import style from "./Card.module.css";


export default function Card({id,name,species,gender,image,onClose}) {
   return (
      <div className={style.container}>
         <img className={style.img} src={image} alt="characterCard" />
         <h2>{name}</h2>
         <h2>{species}</h2>
         {/* <h2>Gender: {gender}</h2> */}
         <button onClick={() => onClose(id)} className={style.xButton}>X</button>
      </div>
   );
}
