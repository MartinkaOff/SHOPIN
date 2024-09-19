import _ from "lodash";

interface ICard {
	img: string;
	title: string;
	price: string;
	priceOld?: string;
}

interface CardsRenderProps {
	cards: ICard[];
	priceOld?: boolean;
	quantity: number;
}

export const CardsRender: React.FC<CardsRenderProps> = ({
	cards,
	priceOld,
	quantity,
}) => {
	const quantityRender = (quantity: number) => {
		let result: ICard[] = [];

		for (let i = 0; i < quantity; i++) {
			result = result.concat(cards);
		}

		return result;
	};

	const combinedArray = _.shuffle(quantityRender(quantity));
	return (
		<div
			className="flex gap-[40px] justify-center flex-wrap mt-[40px]
		
		"
		>
			{combinedArray.map((card: ICard, index: number) => (
				<div className="min-[768px]:w-[400px]" key={index}>
					<img src={card.img} alt={card.title} />
					<p className="min-[768px]:w-[376px] mt-[16px]">{card.title}</p>
					<div className="flex">
						<p>{card.price}</p>
						{priceOld && card.priceOld ? (
							<p className="ml-[6px] line-through opacity-50 text-16px">
								{card.priceOld}
							</p>
						) : undefined}
					</div>
				</div>
			))}
		</div>
	);
};
