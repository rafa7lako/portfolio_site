import { useContext } from "react";
import { CardContext } from "../store/card-context.jsx";

import mainImage from "../assets/VID_20240526_141451.mp4.00_03_42_20.33Still001.png";

import CardCarousel from "./CardCarousel";
import HeroText from "./HeroText.jsx";
import Nav from './Nav.jsx'


export const MainSection = () => {
	const { isCardClicked, mainBackground } = useContext(CardContext);

	return (
		<section
			className="main"
			style={{ backgroundImage: `url(${mainBackground})` }}
		>
			<Nav />

			<div className="hero container">
				<HeroText />
				<CardCarousel />

				<div className="hero__img" style={{ display: isCardClicked !== '' ? 'none' : 'flex' }}>
					<img  src={mainImage} alt="Rafał Łakomski" />
				</div>
			</div>
		</section>
	);
};
