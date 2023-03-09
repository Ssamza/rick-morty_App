import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Nav = (props) => {
        return (
            <div>
            <SearchBar onSearch={props.onSearch}/>
            </div>
        );
    }


export default Nav;