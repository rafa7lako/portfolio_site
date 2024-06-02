import { useState, useContext } from "react";
import mainImage from "/src/assets/VID_20240526_141451.mp4.00_03_42_20.33Still001.png";
import "./App.css";

import CardContextProvider from "./store/card-context.jsx";
import CardCarousel from "./components/CardCarousel";
import { CardContext } from "./store/card-context.jsx";
import HeroText from "./components/HeroText.jsx";



function App() {

	


	
	
	return (
		<CardContextProvider>
			<section className="main">
				<nav className="flex">
					<div className="container">
						<div className="navigation flex">
							<p>
								<a className="navigation__logo" href="#">
									Lakomski
								</a>
							</p>
							<div>
								<ul className="nav__second flex">
									<li>
										<a className="nav__second-item" href="#">
											portfolio
										</a>
									</li>
									<li>
										<a className="nav__second-item" href="#">
											blog
										</a>
									</li>
									<li>
										<a className="nav__second-item" href="#">
											contact
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>

				<div className="hero container">
				
					<HeroText />
					<CardCarousel />

				
					<div className="hero__img">
						<img src={mainImage} alt="Rafał Łakomski" />
					</div>
				</div>
			</section>
		</CardContextProvider>
	);
}

export default App;
