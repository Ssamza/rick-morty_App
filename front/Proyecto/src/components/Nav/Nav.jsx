import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomId);
  };

  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <div className={style.randomContainer}>
        <div className={style.links}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <button className={style.sign}>Sign out</button>
          </NavLink>
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <button className={style.home}>Home</button>
          </NavLink>
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <button className={style.about}>About</button>
          </NavLink>
          <NavLink to="/favorites" style={{ textDecoration: "none" }}>
            <button className={style.favorites}>Favorites</button>
          </NavLink>
          {/* <NavLink to="/" className={style.form}><span>Form</span></NavLink> */}
        </div>
        <button className={style.randomButton} onClick={getRandomCharacter}>
          AddRandom
        </button>
      </div>
    </div>
  );
};

export default Nav;
