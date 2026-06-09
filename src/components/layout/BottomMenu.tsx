import React from 'react';
import { Link } from 'react-router-dom';
import { SiHomebridge } from "react-icons/si";
import { RiMenu2Line } from "react-icons/ri";
import { CiUser,CiSearch } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";

interface BottomMenuItem {
    id: number; 
    name: string;
    link: string;
    icon: React.ComponentType<{ className?: string }>;
    cartCnt?:boolean;
}
interface BottomMenuProps {
    cartCount: number; 
    onClickMenuBar:() => void;// 메뉴바를 여는 함수이므로 매개변수 없이 실행되도록 매칭
}

const Bottom_Menu:BottomMenuItem[] = [
    { id: 1, name: "카테고리", link: "#none", icon:RiMenu2Line },
    { id: 2, name: "마이페이지", link: "#none", icon:CiUser },
    { id: 3, name: "홈", link: "/", icon:SiHomebridge},
    { id: 4, name: "장바구니", link: "/cart", icon:PiHandbagSimpleThin, cartCnt:true },
    { id: 5, name: "검색", link: "/searchList", icon:CiSearch },
];
const BottomMenu = ({cartCount,onClickMenuBar}:BottomMenuProps) => {
    return (
        <div className="bottomMenu block fixed bottom-0 w-full bg-white border-t border-[#acacac] z-10 lg:hidden">
            <nav>
                <ul className='flex justify-between py-[10px] [&_li]:flex-1 [&_li]:flex [&_li]:justify-center [&_li]:text-center [&_.icon]:flex [&_.icon]:justify-center [&_.icon]:min-h-[24px]'>
                    {Bottom_Menu.map((item) => {
                        const Icon = item.icon;
                        const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
                            if(item.id === 1){
                                e.preventDefault();
                                onClickMenuBar();
                            }
                        }
                        return (
                            <li key={item.id}>
                                <Link to={item.link} onClick={handleClick}>
                                    <span className="icon relative">
                                        {Icon && <Icon className="w-6 h-6 text-black" />}
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