import React from "react";
import './Card.css';


const Card = ({headingTitle, paragraphText}) => {
	return (
		<li className="hero__card">
			<div className="hero__card-text">
				<h3>{headingTitle}</h3>
				<p>{paragraphText}</p>
			</div>
		</li>
	);
};

export default Card;