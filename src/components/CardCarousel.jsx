import { useContext } from "react";
import Card from "./Card.jsx";
import { CardContext } from "../store/card-context";
import { motion } from "framer-motion";

import "./CardCarousel.css";

const CardCarousel = () => {
	const cardCtx = useContext(CardContext);

	return (
		<motion.div className="hero__carousel">
			<motion.ul
				drag="x"
				dragConstraints={{ right: 0 }}
				className="hero__carousel-inner"
			>
				{cardCtx.cards.map((card) => {
					return (
						<Card
							key={card.key}
							headingTitle={card.heading}
							paragraphText={card.paragraph}
						/>
					);
				})}

				{/* <Card headingTitle= 'eee' paragraphText='rerewh' />; */}
			</motion.ul>
		</motion.div>
	);
};

export default CardCarousel;