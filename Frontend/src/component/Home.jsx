import React from "react"
import Header from '/src/component/Header.jsx'; 
import Navbar from "./Header";
import '/src/component/home.css';

const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="main-container">
			<h1>Welcome   to   online   quiz   for   everyone!!!</h1>
			<img src="src/assets/quiz.jpg.jpg" alt="Your image" className="center-image" />
		</div>
		</>
	)
}

export default Home;