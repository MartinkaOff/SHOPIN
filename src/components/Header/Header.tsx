import logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";

export const Header = () => {
	return (
		<div className="flex my-[32px] justify-between">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="flex">
				<div className="mr-[32px] text-[18px]">Бизнес-сайты</div>
				<div className="mr-[32px] text-[18px]">Персональные сайты</div>
				<div className="mr-[32px] text-[18px]">Интернет-магазины</div>
				<div className="text-[18px]">Одностраничные сайты</div>
			</div>
			<div className="flex gap-[24px]">
				<div>
					<img src={whatsapp} alt="whatsapp" />
				</div>
				<div>
					<img src={telegram} alt="telegram" />
				</div>
				<div>
					<img src={instagram} alt="instagram" />
				</div>
			</div>
		</div>
	);
};
