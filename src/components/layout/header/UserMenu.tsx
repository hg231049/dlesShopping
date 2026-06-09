import { CiUser } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
interface UserMenuItem {
    id: number; 
    name:string;
    link:string;
    icon:React.ComponentType<{ className?: string }>;
    cartCnt?:boolean;
}

interface UserMenuProps {
    cartCount: number; 
}

const User_Menu:UserMenuItem[] = [
  { id: 2, name: "회원가입", link: "#none", icon:CiUser },
  { id: 3, name: "장바구니", link: "/cart", icon:PiHandbagSimpleThin, cartCnt:true  },
];
const UserMenu = ({cartCount}:UserMenuProps) => {
    return (
        <div className="userMenu">
            <ul className="flex items-center gap-[7px] lg:gap-[20px]">
                {User_Menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <li key={item.id} >
                            <Link to={item.link} className="flex justify-center flex-col gap-[5px] text-black font-normal text-xs text-center leading-none">
                                <span className='flex justify-center relative'>
                                    {Icon && <Icon className="w-6 h-6 text-black" />}
                                    <em className={`flex justify-center items-center absolute bottom-[-7%] right-0 w-[12px] h-[12px] leading-[12px] not-italic text-[10px] text-white bg-brand-color rounded-[100%] lg:right-[6px] ${item.cartCnt ? "block" : "hidden"}`}>{cartCount}</em>
                                </span>
                                <div className="hidden lg:block">
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default UserMenu;