import React from "react";
import Card from "../Card/Card.jsx";
import style from "./Cards.module.css";
import { getFavorites } from "../../redux/action.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <div className={style.cardsContainer}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            onClose={onClose}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
}
