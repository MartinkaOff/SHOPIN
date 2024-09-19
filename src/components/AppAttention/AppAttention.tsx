import { cards } from "../../services/appAttentions";

export const AppAttention = () => {
	return (
		<div className="mt-[120px] max-[360px]:text-[20px] max-[360px]:mt-[60px]">
			<div className="title32px ">
				Приложение, которое заслуживает вашего внимания
			</div>
			<div className="flex gap-[40px] justify-center flex-wrap mt-[40px]">
				{cards.map((card, index) => (
					<div key={index}>
						<img src={card.img} alt={card.img} />
						<p className="mt-[16px] text-[24px] font-medium">{card.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};
