import { useContext } from "react";
import { CardContext } from "../store/card-context";

import './HeroText.css'

const HeroText = () => {

    const { cards, isCardClicked, headingHero, paragraphTwoHero } = useContext(CardContext);

    // let heroHeading = undefined;
    // let heroParagraphTwo = undefined;

	// if(isCardClicked === '') {
	// 	heroHeading = 'let’s design some stories';
    //     heroParagraphTwo = 'I’m a Web-Developer and Graphic Designer. View my projects on the right!'
	// } else {
    //     heroHeading = cards[isCardClicked].heading;
    //     heroParagraphTwo = cards[isCardClicked].paragraph
    // }

	return (
		<div className="hero__text">
			<p className="hero__paragraph-one">Nice to meet you! I’m Rafał.</p>
			<h1 className="hero__heading">{headingHero}</h1>
			<p className="hero__paragraph-two">
				{paragraphTwoHero}
			</p>
			<div>
				<a className="hero__button" href="#">
					Contact
				</a>
			</div>
		</div>
	);
};

export default HeroText;
