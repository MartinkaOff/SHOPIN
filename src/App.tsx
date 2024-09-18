import { MainPage } from "./pages/Main/MainPage";
import { Catalog } from "./pages/Catalog/Catalog";

import "./App.css";
import { About } from "./pages/About/About";

function App() {
	return (
		<>
			<MainPage />
			<Catalog />
			<About />
		</>
	);
}

export default App;
