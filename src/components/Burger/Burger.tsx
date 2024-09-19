import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import { FC } from "react";

interface IBurger {
	linkClick: (url: string, param: string) => void;
	paramValue: string | null;
	setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Burger: FC<IBurger> = ({
	linkClick,
	paramValue,
	setBurgerOpen,
}) => {
	return (
		<div className="fixed z-50 bg-white top-[90px] pb-[20px] w-full">
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					paramValue === "business"
						? "bg-black text-white"
						: "bg-white text-black"
				}`}
				onClick={() => (linkClick("catalog", "business"), setBurgerOpen(false))}
			>
				Бизнес-сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					paramValue === "personal"
						? "bg-black text-white"
						: "bg-white text-black"
				}`}
				onClick={() => (linkClick("catalog", "personal"), setBurgerOpen(false))}
			>
				Персональные сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					paramValue === "shop" ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => (linkClick("catalog", "shop"), setBurgerOpen(false))}
			>
				Интернет-магазины
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					paramValue === "single"
						? "bg-black text-white"
						: "bg-white text-black"
				}`}
				onClick={() => (linkClick("catalog", "single"), setBurgerOpen(false))}
			>
				Одностраничные сайты
			</div>
			<div
				className={`"h-[55px] text-[20px] p-[15px] ${
					paramValue === "about" ? "bg-black text-white" : "bg-white text-black"
				}`}
				onClick={() => linkClick("about", "about")}
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
