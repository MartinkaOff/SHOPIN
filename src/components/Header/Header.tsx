import logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import burger from "../../assets/burger.svg";
import closeBurger from "../../assets/closeBurger.svg";
import { useState } from "react";
import { Burger } from "../Burger/Burger";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const Header = () => {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const [searchParams] = useSearchParams();

	const navigate = useNavigate();

	const handleBurgerOpen = () => {
		setBurgerOpen(!burgerOpen);
	};

	const paramValue = searchParams.get("param");

	const linkClick = (url: string, param: string) => {
		navigate(`/${url}?param=${param}`);
	};
	return (
		<div className="w-full flex my-[32px] justify-between relative max-[768px]:mt-[0px] max-[768px]:mb-[32px] min-[768px]:mx-[80px]">
			<div className="min-[1024px]:hidden" onClick={handleBurgerOpen}>
				<img
					src={burgerOpen ? closeBurger : burger}
					alt={burgerOpen ? closeBurger : burger}
				/>
			</div>
			<Link to={"/"}>
				<img src={logo} alt="logo" />
			</Link>
			<div className="hidden min-[1024px]:flex">
				<div
					onClick={() => linkClick("catalog", "business")}
					className="mr-[32px] text-[18px]"
				>
					Бизнес-сайты
				</div>
				<div
					onClick={() => linkClick("catalog", "personal")}
					className="mr-[32px] text-[18px]"
				>
					Персональные сайты
				</div>
				<div
					onClick={() => linkClick("catalog", "shop")}
					className="mr-[32px] text-[18px]"
				>
					Интернет-магазины
				</div>
				<div
					onClick={() => linkClick("catalog", "single")}
					className="mr-[32px] text-[18px]"
				>
					Одностраничные сайты
				</div>
				<Link to={"/about"} className="text-[18px]">
					О нас
				</Link>
			</div>

			{burgerOpen ? (
				<Burger
					linkClick={linkClick}
					paramValue={paramValue}
					setBurgerOpen={setBurgerOpen}
				/>
			) : undefined}

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
