import React from "react";
// import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
    return(
        <div className={style.aboutContainer}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis, odit, a ipsa commodi minus ipsum, reiciendis earum enim assumenda totam nemo eum deserunt perferendis! Sint similique dolorum totam tempore, architecto autem, qui laboriosam vitae ut fuga eligendi ducimus repudiandae ipsam quae! Qui, doloribus ipsa rerum exercitationem totam vitae a!</p>
            <span>CreatedBy Samza.</span>
            <span>2023</span>
        </div>
    )

}

export default About;