import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { Header } from "../../components/Header/Header";
import { TitleScreen } from "../../components/Header/TitleScreen/TitleScreen";
import { AppAttention } from "../../components/AppAttention/AppAttention";
import { Footer } from "../../components/Footer/Footer";

export const MainPage = () => {
	return (
		<>
			<Header />
			<TitleScreen />
			<Bestsellers />
			<AppAttention />
			<Footer />
		</>
	);
};
