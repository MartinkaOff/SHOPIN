import logo from "../../assets/Logo.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagram from "../../assets/instagram.svg";
import { FormEvent, useState } from "react";

export const Footer = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [question, setQuestion] = useState("");
	const [checkbox, setCheckbox] = useState(false);
	const [error, setError] = useState({
		name: "",
		email: "",
		question: "",
		checkbox: "",
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newErrors = {
			name: name ? "" : "Это поле обязательно",
			email: email ? "" : "Это поле обязательно",
			question: question ? "" : "Это поле обязательно",
			checkbox: checkbox ? "" : "Вы должны согласиться на обработку данных",
		};

		setError(newErrors);
	};

	return (
		<div className="w-full mt-[60px] min-[768px]:mt-[160px] min-[360px]:mt-[60px]">
			<div
				className="flex justify-between items-center
			min-[360px]:flex-col-reverse min-[360px]:justify-center max-[768px]:flex-col-reverse max-[768px]:justify-center 
			min-[768px]:flex-row min-[768px]:justify-between"
			>
				<div
					className="w-[540px]
				min-[360px]:w-full min-[360px]:mt-[60px] min-[360px]:text-center max-[768px]:w-full max-[768px]:mt-[60px] max-[768px]:text-center 
				min-[768px]:w-[540px] min-[768px]:text-left"
				>
					<div>
						<img
							className="min-[360px]:m-auto max-[768px]:m-auto"
							src={logo}
							alt={logo}
						/>
					</div>
					<div className="mt-[24px] text-[20px]">
						Предлагаем готовые сайты с современным дизайном и функциональностью,
						помогая вашему бизнесу выделяться и привлекать клиентов
					</div>
					<div className="mt-[33px]">
						<div className="mt-[16px] font-bold text-[24px]">
							+7 (495) 123-45-67
						</div>
						<div className="mt-[16px] font-bold text-[24px]">
							shopin.shop@gmail.com
						</div>
						<div className="mt-[16px] font-bold text-[24px]">
							support.shopin@gmail.com
						</div>

						<div className="mt-[16px] flex gap-[24px] min-[360px]:justify-center min-[768px]:justify-start">
							<img src={whatsapp} alt={whatsapp} />
							<img src={telegram} alt={telegram} />
							<img src={instagram} alt={instagram} />
						</div>
					</div>
				</div>
				<div className="min-[768px]:w-[420px] min-[360px]:w-[315px]">
					<div className="mt-[24px] text-[20px]">
						Есть вопросы? Свяжитесь с нами
					</div>
					<form onSubmit={handleSubmit} className="mt-[24px]">
						<div className="min-[768px]:w-[420px] h-[53px] mt-[16px] max-[360px]:w-full">
							<input
								className="bg-[#00000008] w-full h-full p-[20px] "
								placeholder="Ваше имя"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name"
							></input>
							{error.name && (
								<p className="text-red-500 text-sm">{error.name}</p>
							)}
						</div>
						<div className="min-[768px]:w-[420px] h-[53px] mt-[16px] max-[360px]:w-full">
							<input
								className="bg-[#00000008] w-full h-full p-[20px] "
								placeholder="Введите свою почту"
								itemType="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								id="email"
							></input>
							{error.email && (
								<p className="text-red-500 text-sm">{error.email}</p>
							)}
						</div>
						<div className="min-[768px]:w-[420px] h-[53px] mt-[16px] max-[360px]:w-full">
							<input
								className="bg-[#00000008] w-full h-full p-[20px] "
								placeholder="Введите свой вопрос"
								name="question"
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
								id="question"
							></input>
						</div>
						<div className="flex align-center gap-[8px] mt-[12px] flex-wrap">
							<div className="flex gap-[8px]">
								<div>
									<input
										className="w-[20px] h-[20px] bg-[#00000008] mt-1"
										type="checkbox"
										onChange={(e) => setCheckbox(e.target.checked)}
									/>
								</div>
								<label className="text-[14px]" htmlFor="checkbox">
									Отправляя сообщение, вы подтверждаете согласие на обработку
									ваших данных
								</label>
							</div>
							{error.checkbox && (
								<p className="text-red-500 text-sm">{error.checkbox}</p>
							)}
						</div>
						<div className="min-[768px]:w-[420px] h-[53px] mt-[24px] min-[360px]:w-[315px]">
							<button
								className="w-full h-full bg-[#000000] text-white text-[18px] "
								type="submit"
							>
								Отправить
							</button>
						</div>
					</form>
				</div>
			</div>
			<div
				className="
				flex justify-between m-[40px] 
				min-[320px]:flex-col-reverse min-[320px]:text-center max-[768px]:text-[12px] 
				min-[320px]:w-full min-[320px]:m-auto min-[320px]:mt-[32px] min-[320px]:gap-[12px]
				min-[768px]:mx-[0px] min-[768px]:my-[40px] min-[768px]:flex-row"
			>
				<div>© Copyright 2024 Shopin. Все права защищены.</div>
				<div>Политика конфиденциальности</div>
				<div>Публичная Оферта</div>
			</div>
		</div>
	);
};
