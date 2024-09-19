import { cards } from "../../services/bestsellersCards";
import { CardsRender } from "../CardsRender/CardsRender";

export const Bestsellers = () => {
	return (
		<div
			className="
				mt-[120px]
				max-[768px]:mt-[60px]
		"
		>
			<div className="title32px max-[360px]:text-[20px]">
				Бестселлеры сезона
			</div>
			<CardsRender cards={cards} priceOld={true} quantity={3} />
		</div>
	);
};
