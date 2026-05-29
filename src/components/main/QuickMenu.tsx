import { quickIcon1,quickIcon2,quickIcon3,quickIcon4 } from '../../assets/main';
interface QuickMenuItem {
    id: number;
    name: string;
    link: string;
    icon:string; 
    bold?:boolean;
}

const QUICK_MENU_LIST:QuickMenuItem[] = [
  { id: 1, name: "NEW", link: "#none", icon:quickIcon1 , bold:true},
  { id: 2, name: "슬룸 멤버십", link: "#none", icon:quickIcon2 },
  { id: 3, name: "브랜드 스토리", link: "#none", icon:quickIcon3 },
  { id: 4, name: "제품 사용법", link: "#none", icon:quickIcon4 },
];
const QuickMenu = () => {
    return (
        <div className="main-box box1 main-quick-menu mt-[35px] lg:mt-[70px]">
            <div className="inner">
                <div className="flex flex gap-6 justify-between text-xs text-center lg:gap-[60px] lg:justify-center ">
                    {QUICK_MENU_LIST.map((item) => (
                    <div key={item.id}>
                        <a href={item.link}>
                            <span><img src={item.icon} alt="{item.name}" /></span>
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