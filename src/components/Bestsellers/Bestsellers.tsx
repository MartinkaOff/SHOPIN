import { cards } from "../../services/bestsellersCards";
import { CardsRender } from "../CardsRender/CardsRender";

export const Bestsellers = () => {
	return (
		<div className="mt-[120px]">
			<div className="title32px">Бестселлеры сезона</div>
			<CardsRender cards={cards} priceOld={true} quantity={3} />
		</div>
	);
};
