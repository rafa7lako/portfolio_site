import { useContext, useEffect, useState } from "react";
import Card from "./Card.jsx";
import { CardContext } from "../store/card-context";
import { motion, useMotionValue } from "framer-motion";

import "./CardCarousel.css";

const DRAG_BUFFER = 50;

const CardCarousel = () => {
	const [dragging, setDragging] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);

	const { cards, carouselRef, secondaryCarouselRef } = useContext(CardContext);

	const dragX = useMotionValue(0);

	const onDragStart = () => {
		setDragging(true);
		console.log("start");
	};

	const onDragEnd = () => {
		setDragging(false);

		const x = dragX.get();

		if (x <= -DRAG_BUFFER && cardIndex < cards.length - 1) {
			setCardIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && cardIndex > 0) {
			setCardIndex((pv) => pv - 1);
		}
	};

	const scrollRightClick = () => {
		if (cardIndex < cards.length - 1) setCardIndex((pv) => pv + 1);
		console.log(cardIndex);
	};
	const scrollLeftClick = () => {
		if (cardIndex > 0) {
			setCardIndex((pv) => pv - 1);
		}

		console.log(cardIndex);
	};
	// setScrollPosition(x.current)

	return (
		<div className="hero__carousel-wrapper">
			<a className="carousel__button-left" onClick={scrollLeftClick}>
				<i className="carousel__button fa-solid fa-chevron-left"></i>
			</a>
			<a className="carousel__button-right" onClick={scrollRightClick}>
				<i className="carousel__button fa-solid fa-chevron-right"></i>
			</a>

			<motion.div ref={carouselRef} className="hero__carousel">
				<motion.ul
					ref={secondaryCarouselRef}
					drag="x"
					dragConstraints={{ right: 0, left: 0 }}
					style={{
						x: dragX,
					}}
					animate={{
						translateX: `-${cardIndex * 25}%`,
					}}
					onDragStart={onDragStart}
					onDragEnd={onDragEnd}
					className="hero__carousel-inner"
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
