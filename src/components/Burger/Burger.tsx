import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import { useState } from "react";

export const Burger = () => {
	const [active, setActive] = useState(0);

	return (
		<div className="fixed z-50 bg-white top-[90px] pb-[20px] w-full">
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					active === 1 ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => setActive(1)}
			>
				Бизнес-сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					active === 2 ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => setActive(2)}
			>
				Персональные сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					active === 3 ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => setActive(3)}
			>
				Интернет-магазины
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					active === 4 ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => setActive(4)}
			>
				Одностраничные сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					active === 5 ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => setActive(5)}
			>
				О нас
			</div>

			<div className="mt-[111px] text-center">
				<div className="mt-[12px] font-bold text-[16px]">
					+7 (495) 123-45-67
				</div>
				<div className="mt-[12px] font-bold text-[16px]">
					shopin.shop@gmail.com
				</div>
				<div className="mt-[12px] font-bold text-[16px]">
					support.shopin@gmail.com
				</div>

				<div className="mt-[16px] flex gap-[24px] justify-center">
					<img src={whatsapp} alt={whatsapp} />
					<img src={telegram} alt={telegram} />
					<img src={instagram} alt={instagram} />
				</div>
			</div>
		</div>
	);
};
