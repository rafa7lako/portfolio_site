import { useContext } from "react";
import { CardContext } from "../store/card-context";
import "./Card.css";

const Card = ({ cardKey, headingTitle, paragraphText, image }) => {
	const { cardClickHandlerFunction, isCardGrabbedData, cardGrabbedData } =
		useContext(CardContext);

	return (
		<li
			className="hero__card"
			style={{
				backgroundImage: `url(${image})`,
				cursor: cardGrabbedData ? "grabbing" : "grab",
			}}
			onMouseDown={isCardGrabbedData}
			onMouseUp={isCardGrabbedData}
			
		>
			<div className="hero__card-text">
				<h3>{headingTitle}</h3>
				<p>{paragraphText}</p>
			</div>
			<button
				className="card__moreBtn"
				onClick={() => {
					cardClickHandlerFunction(cardKey);
				}}
			>
				<i class="fa-solid fa-magnifying-glass"></i>
			</button>
		</li>
	);
};

export default Card;
