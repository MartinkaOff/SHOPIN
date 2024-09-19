import logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import burger from "../../assets/burger.svg";
import closeBurger from "../../assets/closeBurger.svg";
import { useState } from "react";
import { Burger } from "../Burger/Burger";

export const Header = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const handleBurgerOpen = () => {
		setBurgerOpen(!burgerOpen);
	};

	return (
		<div className="w-full flex my-[32px] justify-between relative max-[768px]:my-[15px]">
			<div onClick={handleBurgerOpen}>
				<img
					src={burgerOpen ? closeBurger : burger}
					alt={burgerOpen ? closeBurger : burger}
				/>
			</div>
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="hidden min-[1024px]:flex">
				<div className="mr-[32px] text-[18px]">Бизнес-сайты</div>
				<div className="mr-[32px] text-[18px]">Персональные сайты</div>
				<div className="mr-[32px] text-[18px]">Интернет-магазины</div>
				<div className="text-[18px]">Одностраничные сайты</div>
			</div>

			{burgerOpen ? <Burger /> : undefined}

			<div className="flex gap-[24px]">
				<div>
					<img src={whatsapp} alt="whatsapp" />
				</div>
				<div className="hidden min-[768px]:block">
					<img src={telegram} alt="telegram" />
				</div>
				<div className="hidden min-[768px]:block">
					<img src={instagram} alt="instagram" />
				</div>
			</div>
		</div>
	);
};
