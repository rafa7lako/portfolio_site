import { useContext, useEffect } from "react";
import Card from "./Card.jsx";
import { CardContext } from "../store/card-context";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

import "./CardCarousel.css";

const CardCarousel = () => {
	const {
		cards,
		carouselRef,
		secondaryCarouselRef,
		carouselWidthData,
		setScrollPosition,
	} = useContext(CardContext);

	const x = useMotionValue(0);




	// setScrollPosition(x.current)

	return (
		<div className="hero__carousel-wrapper">
			<button className="carousel__button-left">L</button>
			<button className="carousel__button-right">R</button>

			<motion.div ref={carouselRef} className="hero__carousel">
				<motion.ul
					ref={secondaryCarouselRef}
					drag="x"
					
					dragConstraints={{ right: 0, left: -carouselWidthData }}
					className="hero__carousel-inner"
					style={{ x }} // Bind the motion value
				>
					{cards.map((card) => {
						return (
							<Card
								key={card.key}
								cardKey={card.key}
								headingTitle={card.heading}
								paragraphText={card.paragraph}
								image={card.backgroundImg}
							/>
						);
					})}

					{/* <Card headingTitle= 'eee' paragraphText='rerewh' />; */}
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default CardCarousel;
