import "./App.css";
import { MainSection } from "./components/MainSection.jsx";

import CardContextProvider from "./store/card-context.jsx";




function App() {
	return (
		<CardContextProvider>
			<MainSection />
		</CardContextProvider>
	);
}

export default App;
