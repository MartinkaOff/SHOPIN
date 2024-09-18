export const TitleScreen = () => {
	return (
		<div className="bg">
			<div className="bg-radial-gradient h-[700px] w-full text-center flex flex-col items-center p-[165px]">
				<div className=" text-[72px] text-white font-bold leading-none">
					Создайте успешный бизнес с нашими сайтами
				</div>
				<div className="w-[540px] text-[20px] text-white mt-[32px]">
					Выберите из готовых шаблонов, чтобы ваш бизнес выделялся и привлекал
					клиентов. Наши сайты предлагают современный дизайн и необходимые
					функции для профессионального онлайн-присутствия
				</div>
				<div className="bg-white mt-[64px]">
					<button className="w-[121px] h-[45px]">Смотреть</button>
				</div>
			</div>
		</div>
	);
};
