import { Link } from 'react-router-dom';
interface MenuListItem {
    id: number; 
    name:string;
    link:string;
    path:string;
    point?:boolean;
}

const MENU_LIST:MenuListItem[] = [
  { id: 1, name: "🌸봄맞이 기획전",path:"🌸봄맞이 기획전", link: "/beauty" ,point:true},
  { id: 2, name: "NEW", link: "/fragrances",path:"NEW" },
  { id: 3, name: "전체 상품", link: "/furniture",path:"전체 상품" },
  { id: 4, name: "단독 세트", link: "/groceries",path:"단독 세트" },
  { id: 5, name: "등/허리", link: "/list",path:"등 허리" },
  { id: 6, name: "발/종아리", link: "/list",path:"발 종아리" },
  { id: 7, name: "손/눈", link: "/list",path:"손 눈" },
];
const GNB = () => {
    return (
        <nav className="scroll overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch">
            <ul className="flex items-center gap-[25px] m-[5px_0_10px_0]  lg:gap-[24px] lg:m-[10px_0_20px_0] whitespace-nowrap">
                {MENU_LIST.map((item) => (
                    <li key={item.id} >
                        <Link to={`/list/${item.link}`} 
                            style={item.point ? { WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}}
                            className={`py-[5px] font-medium text-base leading-6 tracking-[-0.176px] 
                            lg:leading-4 lg:py-2  lg:tracking-[-0.32px] lg:font-bold
                            ${item.point ? 'font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#fe3d6d] via-[#ff9ab4] to-[#fe3d6d] bg-[length:200%_auto] animate-gradient-flow' : 'text-[#2B3136]'}
                        `}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default GNB;