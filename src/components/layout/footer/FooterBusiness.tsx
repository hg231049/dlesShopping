import { arrowRight } from '../../../assets/main/index';
interface BusinessMenuItem {
    id: number; 
    name:string;
    link:string;
}
const Business_Menu:BusinessMenuItem[] = [
  { id: 1, name: "단체 선물", link: "#none" },
  { id: 2, name: "수출/해외협력", link: "#none" },
];
const FooterBusiness = () => {
    return (
        <div className="business-btn">
            <ul className={`
                flex flex-row gap-3 lg:flex-col
                [&_li]:flex-1
                [&_li]:p-[7px_0_8px] [&_li]:border-b [&_li]:border-brand-color 
                [&_a]:block [&_a]:text-brand-color [&_a]:text-xs [&_a]:tracking-[-0.024rem]
                [&_li]:relative 
                [&_li]:after:content-[''] 
                [&_li]:after:absolute [&_li]:after:right-0 [&_li]:after:top-1/2 [&_li]:after:-translate-y-1/2 
                [&_li]:after:w-4 [&_li]:after:h-4 
                [&_li]:after:bg-[9px_8px] [&_li]:after:bg-no-repeat [&_li]:after:bg-center
            `}>
                {Business_Menu.map((item) => (
                <li key={item.id}  style={{ '--arrow-url': `url(${arrowRight})` }} className="after:bg-[image:var(--arrow-url)]">
                    <a href={item.link}>{item.name}</a>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterBusiness;