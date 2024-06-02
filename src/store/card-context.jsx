import { createContext, useState } from "react";

export const CardContext = createContext({
	cards: [
		{
			key: 0,
			heading: "heading one",
			paragraph: "paragraph1",
		},
		{
			key: 1,
			heading: "heading2",
			paragraph: "paragraph2",
		},
		{
			key: 2,
			heading: "heading3",
			paragraph: "paragraph3",
		},
		{
			key: 3,
			heading: "heading4",
			paragraph: "paragraph4",
		},
	],
	cardClickHandler: () => {},
	isCardClicked: undefined,
});

export default function CardContextProvider({ children }) {
	const cardData = [
		{
			key: 0,
			heading: "heading one",
			paragraph: "paragraph1",
		},
		{
			key: 1,
			heading: "heading2",
			paragraph: "paragraph2",
		},
		{
			key: 2,
			heading: "heading3",
			paragraph: "paragraph3",
		},
		{
			key: 3,
			heading: "heading4",
			paragraph: "paragraph4",
		},
	];

	const [cardClicked, setCardClicked] = useState("");

	const cardClickHandler = (cardKey) => {
		setCardClicked(cardKey);
	};

	// console.log(cardClicked);

	const ctxValue = {
		cards: cardData,
		cardClickHandlerFunction: cardClickHandler,
		isCardClicked: cardClicked,
	};

	return (
		<CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
	);
}
