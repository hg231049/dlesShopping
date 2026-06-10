
import { PiGiftLight,PiCreditCardLight,PiBookBookmarkLight,PiBookmarkLight   } from "react-icons/pi";
interface QuickMenuItem {
    id: number;
    name: string;
    link: string;
    icon:React.ComponentType<{ className?: string }>; 
    bold?:boolean;
}

const QUICK_MENU_LIST:QuickMenuItem[] = [
  { id: 1, name: "NEW", link: "#none", icon:PiGiftLight , bold:true},
  { id: 2, name: "멤버십", link: "#none", icon:PiCreditCardLight,  },
  { id: 3, name: "브랜드 스토리", link: "#none", icon:PiBookBookmarkLight  },
  { id: 4, name: "제품 사용법", link: "#none", icon:PiBookmarkLight  },
];
const QuickMenu = () => {
    return (
        <div className="main-box box1 main-quick-menu mt-[35px] lg:mt-[70px]">
            <div className="inner">
                <div className="flex flex gap-6 justify-between text-xs text-center lg:gap-[60px] lg:justify-center ">
                    {QUICK_MENU_LIST.map((item) => (
                    <div key={item.id}>
                        <a href={item.link}>
                            <span className="flex justify-center items-center w-[55px] h-[55px] mx-auto lg:w-[110px] lg:h-[110px] bg-brand-color rounded-[8px] text-white">
                                <item.icon size={30} />
                            </span>
                            <p className={`mt-[5px] lg:text-lg ${item.bold ? 'font-400 lg:font-bold' : 'font-normal'}`}>{item.name}</p>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuickMenu;