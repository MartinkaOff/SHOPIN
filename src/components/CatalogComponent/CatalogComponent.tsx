import { useState } from "react";
import { cards } from "../../services/bestsellersCards";
import { CardsRender } from "../CardsRender/CardsRender";
import { useSearchParams } from "react-router-dom";

export const CatalogComponent = () => {
	const numbersPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const [searchParams] = useSearchParams();

	const paramValue = searchParams.get("param");

	const paramValueText = () => {
		return paramValue === "business"
			? "Бизнес-сайты"
			: paramValue === "personal"
			? "Персональные сайты"
			: paramValue === "shop"
			? "Интернет-магазины"
			: "Одностраничные сайты";
	};

	const [showAll, setShowAll] = useState(false);
	const [active, setActive] = useState(1);

	const activeStyle = "bg-black text-white";

	const handleShowMore = () => {
		setShowAll(true);
	};

	return (
		<div>
			<div>
				<div className="title32px text-left">{paramValueText()}</div>
				<div className="w-[541px]">
					{`${paramValueText()} — готовые решения для создания профессиональных
					страниц, которые помогут продвигать ваш бренд и увеличивать продажи`}
				</div>
				<div className="flex justify-between mt-[40px]">
					<div>
						<button className="bg-[#00000008] px-[20px] py-[12px]">
							По популярности
						</button>
					</div>
					<div>
						<button className="bg-[#00000008] px-[20px] py-[12px]">
							120 товаров
						</button>
					</div>
				</div>
			</div>
			<div>
				<CardsRender cards={cards} priceOld={false} quantity={4} />
				<div className="flex justify-center gap-[12px] mt-[40px]">
					{numbersPage.slice(0, 3).map((number, index) => (
						<div
							key={index}
							className={`border border-solid w-[42px] h-[45px] p-[10px] text-center ${
								active === number ? activeStyle : undefined
							}`}
							onClick={() => setActive(number)}
						>
							{number}
						</div>
					))}

					{!showAll && (
						<div
							onClick={handleShowMore}
							className="border border-solid w-[42px] h-[45px] p-[10px] text-center"
						>
							...
						</div>
					)}

					{showAll &&
						numbersPage
							.slice(3, numbersPage.length - 1)
							.map((number, index) => (
								<div
									key={index}
									className={`border border-solid w-[42px] h-[45px] p-[10px] text-center ${
										active === number ? activeStyle : undefined
									}`}
									onClick={() => setActive(number)}
								>
									{number}
								</div>
							))}
					<div
						onClick={() => setActive(numbersPage.length)}
						className={`border border-solid w-[42px] h-[45px] p-[10px] text-center ${
							active === numbersPage.length ? activeStyle : undefined
						}`}
					>
						{numbersPage[numbersPage.length - 1]}
					</div>
				</div>
			</div>
		</div>
	);
};
