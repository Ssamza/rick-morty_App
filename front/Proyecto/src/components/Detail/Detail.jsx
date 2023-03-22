import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import bufferingGif from "../../assets/img/loading-buffering.gif";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "7fe437112629.ac565859637cc0900f47";

    fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.log(error));
  }, [detailId]);

  const backButton = () => {
    navigate("/home");
  };

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
              <p>STATUS: {character.status}</p>
              <p>SPECIES: {character.species}</p>
              <p>GENDER: {character.gender}</p>
              <p>BIRTHPLACE: {character.origin?.name}</p>
              <p>ID: {character.id}</p>
            </div>
            <div className={style.imgContainer}>
              <img src={character.image} alt="img" className={style.image} />
            </div>
          </div>
        </>
      ) : (
        <div className={style.gifContainer}>
          <h2>Character is loading...</h2>
          <img src={bufferingGif} alt="details..." className={style.gif} />
        </div>
      )}
    </div>
  );
};

export default Detail;
