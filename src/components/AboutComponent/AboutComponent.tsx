import { SiteCard } from "../SiteCard/SiteCard";

import EliteWebPro700x500 from "../../assets/aboutImg/EliteWebPro700x500.png";
import ProSiteBuilder700x500 from "../../assets/aboutImg/ProSiteBuilder700x500.png";
import PrimeBusiness700x500 from "../../assets/aboutImg/PrimeBusiness700x500.png";

export const AboutComponent = () => {
	return (
		<div className="w-full min-[768px]:mx-[80px]">
			<div className="text-[24px] min-[768px]:text-[62px] font-bold leading-none min-[768px]:w-[920px] mx-auto mt-[32px] min-[768px]:mt-[80px] text-center">
				Создаем сайты, которые делают ваш бизнес успешным
			</div>

			<div>
				<div className="mt-[60px] min-[768px]:mt-[120px]">
					<SiteCard
						img={EliteWebPro700x500}
						title="Lorem ipsum dolor sit amet consectetur. Odio vestibulum id habitant in cras."
						text="Lorem ipsum dolor sit amet consectetur. 
                            Nulla et tempus quam morbi porta pellentesque 
                            augue ultrices. Condimentum in arcu ut aliquet pellentesque 
                            quisque eu porttitor nunc. Suspendisse fames eget at iaculis nibh nullam. 
                            Vitae pellentesque ornare enim proin eu nulla porttitor. 
                            Penatibus eget turpis pulvinar libero malesuada. 
                            Aliquet ultricies gravida non enim ac vel eu."
					/>
				</div>
				<SiteCard
					img={ProSiteBuilder700x500}
					title="Lorem ipsum dolor sit amet consectetur. Odio vestibulum id habitant in cras."
					text={
						<ul className="list-disc list-outside">
							<li className="mt-[24px]">
								Lorem ipsum dolor sit amet consectetur. Nulla et tempus quam
								morbi porta pellentesque augue ultrices. Condimentum in arcu ut
								aliquet pellentesque quisque eu porttitor nunc. Suspendisse
								fames eget at iaculis nibh nullam
							</li>
							<li className="mt-[24px]">
								Lorem ipsum dolor sit amet consectetur. Nulla et tempus quam
								morbi porta pellentesque augue ultrices. Condimentum in arcu ut
								aliquet pellentesque quisque eu porttitor nunc. Suspendisse
								fames eget at iaculis nibh nullam
							</li>
							<li className="mt-[24px]">
								Lorem ipsum dolor sit amet consectetur. Nulla et tempus quam
								morbi porta pellentesque augue ultrices. Condimentum in arcu ut
								aliquet pellentesque quisque eu porttitor nunc. Suspendisse
								fames eget at iaculis nibh nullam
							</li>
						</ul>
					}
				/>
				<SiteCard
					img={PrimeBusiness700x500}
					title="Lorem ipsum dolor sit amet consectetur. Odio vestibulum id habitant in cras."
					text="Lorem ipsum dolor sit amet consectetur. 
                            Nulla et tempus quam morbi porta pellentesque 
                            augue ultrices. Condimentum in arcu ut aliquet pellentesque 
                            quisque eu porttitor nunc. Suspendisse fames eget at iaculis nibh nullam. 
                            Vitae pellentesque ornare enim proin eu nulla porttitor. 
                            Penatibus eget turpis pulvinar libero malesuada. 
                            Aliquet ultricies gravida non enim ac vel eu."
					buttonText="Бизнес-сайты"
				/>
			</div>
		</div>
	);
};
