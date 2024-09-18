import PrimeBusiness from '../assets/bestsellersImg/PrimeBusiness.png'
import EliteWebPro from '../assets/bestsellersImg/EliteWebPro.png'
import ProSiteBuilder from '../assets/bestsellersImg/ProSiteBuilder.png'

export const cards = [
    {
        img: PrimeBusiness,
        title: 'PrimeBusiness - Эффективные решения для успешного бизнеса',
        price: '800 000 ₸'
    },
    {
        img: EliteWebPro,
        title: 'EliteWebPro - Профессиональные сайты для современных компаний',
        price: '505 900 ₸',
        priceOld: '600 900 ₸'
    },
    {
        img: ProSiteBuilder,
        title: 'ProSiteBuilder - Простота и функциональность для вашего онлайн-присутствия',
        price: '200 000 ₸'
    },
    
]

export const cards1 = [...cards];
const secondCard = cards1.splice(1, 1)[0];
cards1.unshift(secondCard);

export const cards2 = [...cards];
const thirdCard = cards2.splice(2, 1)[0];
cards2.unshift(thirdCard);