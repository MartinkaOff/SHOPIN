export const TitleScreen = () => {
	return (
		<div className="h-full min-[768px]:w-full">
			<div className="bg-radial-gradient text-center flex flex-col items-center py-[138px] px-[16px] min-[768px]:p-[165px] ">
				<div
					className="
					min-[768px]:w-full
				min-[768px]:text-[62px] text-white font-bold leading-none
				
				min-[360px]:text-[24px] min-[360px]:w-[302px]
				"
				>
					Создайте успешный бизнес с нашими сайтами
				</div>
				<div
					className="min-[768px]:w-[540px] max-[768px]:text-[14px] text-[20px] text-white mt-[32px]
				"
				>
					Выберите из готовых шаблонов, чтобы ваш бизнес выделялся и привлекал
					клиентов. Наши сайты предлагают современный дизайн и необходимые
					функции для профессионального онлайн-присутствия
				</div>
				<div className="bg-white mt-[64px]">
					<button
						className="
					w-[121px] h-[45px]
					"
					>
						Смотреть
					</button>
				</div>
			</div>
		</div>
	);
};
