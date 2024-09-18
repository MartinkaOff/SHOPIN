import { cards, cards1, cards2 } from "../../services/bestsellersCards";

export const Bestsellers = () => {
	return (
		<div className="mt-[120px]">
			<div className="title32px">Бестселлеры сезона</div>
			<div className="flex gap-[40px] justify-center flex-wrap mt-[40px]">
				{cards.map((card, index) => (
					<div className="w-[400px]" key={index}>
						<img src={card.img} alt={card.title} />
						<p className="w-[376px] mt-[16px]">{card.title}</p>
						<div className="flex">
							<p>{card.price}</p>
							{card.priceOld ? (
								<p className="ml-[6px] line-through opacity-50 text-16px">
									{card.priceOld}
								</p>
							) : undefined}
						</div>
					</div>
				))}
				{cards1.map((card, index) => (
					<div className="w-[400px]" key={index}>
						<img src={card.img} alt={card.title} />
						<p className="w-[376px] mt-[16px]">{card.title}</p>
						<div className="flex">
							<p>{card.price}</p>
							{card.priceOld ? (
								<p className="ml-[6px] line-through opacity-50 text-16px">
									{card.priceOld}
								</p>
							) : undefined}
						</div>
					</div>
				))}
				{cards2.map((card, index) => (
					<div className="w-[400px]" key={index}>
						<img src={card.img} alt={card.title} />
						<p className="w-[376px] mt-[16px]">{card.title}</p>
						<div className="flex mt-[12px]">
							<p>{card.price}</p>
							{card.priceOld ? (
								<p className="ml-[6px] line-through opacity-50 text-16px">
									{card.priceOld}
								</p>
							) : undefined}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
