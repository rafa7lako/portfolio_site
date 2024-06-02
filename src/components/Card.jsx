import {useContext} from "react";
import { CardContext } from "../store/card-context";
import './Card.css';


const Card = ({cardKey, headingTitle, paragraphText}) => {

	const { cardClickHandlerFunction } = useContext(CardContext)

	return (
		<li className="hero__card" onClick={() => {cardClickHandlerFunction(cardKey)}}>
			<div className="hero__card-text">
				<h3>{headingTitle}</h3>
				<p>{paragraphText}</p>
			</div>
		</li>
	);
};

export default Card;