import { createContext, useState, useEffect, useRef } from "react";

import bgMainImage from "../assets/alexis-fauvet-vwGnTLkbgpI-unsplash.jpg";
import image1 from "../assets/david-marcu-78A265wPiO4-unsplash.jpg";
import image2 from "../assets/aleks-dahlberg-r30_L13HFhU-unsplash.jpg";

export const CardContext = createContext({
	cards: [
		{
			key: 0,
			heading: "heading one",
			paragraph: "paragraph1",
			backgroundImg: image1,
		},
		{
			key: 1,
			heading: "heading2",
			paragraph: "paragraph2",
			backgroundImg: image2,
		},
		{
			key: 2,
			heading: "heading3",
			paragraph: "paragraph3",
			backgroundImg: undefined,
		},
		{
			key: 3,
			heading: "heading4",
			paragraph: "paragraph4",
			backgroundImg: undefined,
		},
	],
	cardClickHandler: () => {},
	isCardClicked: undefined,
	headingHero: undefined,
	paragraphTwoHero: undefined,
	mainBackground: undefined,
	carouselRef: undefined,
	secondaryCarouselRef: undefined,
	carouselWidthData: undefined,
	setScrollPosition: () => {},
	isCardGrabbedData: () => {},
	cardGrabbedData: false

});

export default function CardContextProvider({ children }) {
	const cardData = [
		{
			key: 0,
			heading: "heading one",
			paragraph: "paragraph1",
			backgroundImg: image1,
		},
		{
			key: 1,
			heading: "heading2",
			paragraph: "paragraph2",
			backgroundImg: image2,
		},
		{
			key: 2,
			heading: "heading3",
			paragraph: "paragraph3",
			backgroundImg: undefined,
		},
		{
			key: 3,
			heading: "heading4",
			paragraph: "paragraph4",
			backgroundImg: undefined,
		},
	];

	const [cardClicked, setCardClicked] = useState("");
	const [carouselWidth, setCarouselWidth] = useState(0);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [cardGrabbed, isCardGrabbed] = useState(false)


	const carousel = useRef();
	const secondaryCarousel = useRef();



	useEffect(() => {
		setCarouselWidth(
			carousel.current.scrollWidth - carousel.current.offsetWidth + 100
		);
	}, []);

	const cardClickHandler = (cardKey) => {
		setCardClicked(cardKey);
	};

	let heroHeading = undefined;
	let heroParagraphTwo = undefined;
	let mainBG = undefined;

	if (cardClicked === "") {
		heroHeading = "let’s design some stories";
		heroParagraphTwo =
			"I’m a Web-Developer and Graphic Designer. View my projects on the right!";
		mainBG = bgMainImage;
	} else {
		heroHeading = cardData[cardClicked].heading;
		heroParagraphTwo = cardData[cardClicked].paragraph;
		mainBG = cardData[cardClicked].backgroundImg;
	}

	const cardGrabHandler = (event) => {
		if (event.type === 'mousedown'){
			isCardGrabbed(true)
		} else if (event.type === 'mouseup' || event.type === 'mouseleave'){
			isCardGrabbed(false)
		}
	}

	

	

	const ctxValue = {
		cards: cardData,
		cardClickHandlerFunction: cardClickHandler,
		isCardClicked: cardClicked,
		headingHero: heroHeading,
		paragraphTwoHero: heroParagraphTwo,
		mainBackground: mainBG,
		carouselRef: carousel,
		secondaryCarouselRef: secondaryCarousel,
		carouselWidthData: carouselWidth,
		setScrollPosition: setScrollPosition,
		isCardGrabbedData: cardGrabHandler,
		cardGrabbedData: cardGrabbed,
	};

	return (
		<CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
	);
}
