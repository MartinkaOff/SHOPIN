import { FC, ReactNode } from "react";

interface ISiteCard {
	img: string;
	title: string;
	text: string | ReactNode;
	buttonText?: string;
}

export const SiteCard: FC<ISiteCard> = ({ img, title, text, buttonText }) => {
	return (
		<div className="flex gap-[40px] w-[1240px] h-[500px] mt-[80px]">
			<div className="w-[700px] h-[500px]">
				<img className="w-full h-full" src={img} alt={img} />
			</div>
			<div className="w-[500px]">
				<div className="font-bold text-20px">{title}</div>
				<div className="mt-[24px]">{text}</div>
				{buttonText ? (
					<div className="w-[154px] h-[53px] mt-[24px]">
						<button className="w-full h-full bg-[#000000] text-white text-[18px]">
							{buttonText}
						</button>
					</div>
				) : undefined}
			</div>
		</div>
	);
};
