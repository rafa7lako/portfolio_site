import { createContext } from "react";

export const CardContext = createContext({
	cards: [
		{
			heading: "heading",
			paragraph: "paragraph",
		},
		{
			heading: "heading2",
			paragraph: "paragraph2",
		},
		{
			heading: "heading",
			paragraph: "paragraph",
		},
		{
			heading: "heading2",
			paragraph: "paragraph2",
		},
	],
});
