import {useContext} from "react";
import { CardContext } from "../store/card-context";
import './Card.css';


const Card = ({cardKey, headingTitle, paragraphText, image}) => {

	const { cardClickHandlerFunction } = useContext(CardContext)

	return (
		<li className="hero__card" style={{backgroundImage: `url(${image})`}} onClick={() => {cardClickHandlerFunction(cardKey)}}>
			<div className="hero__card-text">
				<h3>{headingTitle}</h3>
				<p>{paragraphText}</p>
			</div>
		</li>
	);
};

export default Card;