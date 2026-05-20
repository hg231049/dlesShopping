import { IconCate, IconMy, IconCart, IconHome, IconSearch } from '../icon/Icon';
import { Link } from 'react-router-dom';
const Bottom_Menu = [
    { id: 1, name: "카테고리", link: "#none", icon:IconCate },
    { id: 2, name: "마이페이지", link: "#none", icon:IconMy },
    { id: 3, name: "홈", link: "/", icon:IconHome},
    { id: 4, name: "장바구니", link: "/cart", icon:IconCart, cartCnt:true },
    { id: 5, name: "검색", link: "/searchList", icon:IconSearch },
];
const BottomMenu = ({cartCount,onClickMenuBar}) => {
    return (
        <div className="bottomMenu block fixed bottom-0 w-full bg-white border-t border-[#acacac] z-10 lg:hidden">
            <nav>
                <ul className='flex justify-between py-[10px] [&_li]:flex-1 [&_li]:flex [&_li]:justify-center [&_li]:text-center [&_.icon]:flex [&_.icon]:justify-center [&_.icon]:min-h-[24px]'>
                    {Bottom_Menu.map((item) => {
                        const Icon = item.icon;
                        const handleClick = (e) => {
                            if(item.id === 1){
                                e.preventDefault();
                                onClickMenuBar();
                            }
                        }
                        return (
                            <li key={item.id}>
                                <Link to={item.link} onClick={handleClick}>
                                    <span className="icon relative">
                                        {Icon && <Icon className="w-6 h-6 text-blac" />}
                                        <em className={`absolute bottom-[-7%] right-[20%] w-[12px] h-[12px] leading-[12px] not-italic text-[10px] text-white bg-brand-color rounded-[100%] ${item.cartCnt ? "block" : "hidden"}`}>{cartCount}</em>
                                    </span>
                                    <p className='mt-[6px] text-[12px]'>{item.name}</p>
                                </Link>
                            </li>
                        );
                   })}
                    
                </ul>
            </nav>
        </div>
    )
}

export default BottomMenu;