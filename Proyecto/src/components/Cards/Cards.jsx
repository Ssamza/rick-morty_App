import React from 'react';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
   // const onClose = () => window.alert('Emulamos que se cierra la card');
   return (
      <div className={style.cardsContainer}>
      {characters.map(({id,name,species,gender,image}) => {
         return ( <Card
         onClose={onClose}
         id = {id}
         name = {name}
         species = {species}
         gender = {gender}
         image = {image}
         />)
      })
      }
   </div>
)};   
