import { CatalogComponent } from "../../components/CatalogComponent/CatalogComponent";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const Catalog = () => {
	return (
		<div>
			<Header />
			<CatalogComponent />
			<Footer />
		</div>
	);
};
