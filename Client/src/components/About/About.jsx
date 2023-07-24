import React from 'react';
// import { Link } from "react-router-dom";
import style from './About.module.css';

const About = () => {
	return (
		<div className={style.aboutContainer}>
			<div className={style.aboutTitle}>
				<h1>Rick & Morty App</h1>
			</div>
			<p>
				This is a first web application that is being developed with the purpose
				of putting into practice the knowledge obtained during module 2. Using,
				mainly, React and Redux as JavaScript technologies.
				<br />
				<br />
				Both technologies are very popular in modern web application development
				and are widely used by developers all over the world. Thank you for
				reading.
			</p>
			<br />
			<br />
			<a href='https://github.com/Ssamza'>Created by Samza</a>
			<span style={{ fontSize: '9px' }}>2023</span>
		</div>
	);
};

export default About;
