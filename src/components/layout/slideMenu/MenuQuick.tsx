
import { CiUser,CiLogout,CiViewList,CiSearch } from "react-icons/ci";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface QuickMenuItem {
    id: number; 
    name: string;
    link: string;
    icon:React.ComponentType<{ className?: string }>;
    cartCnt?:boolean;
}
interface MenuQuickProps {
    cartCount:number;
    search:string;
    onChangeSearch:(e:React.ChangeEvent<HTMLInputElement>)=> void;
    onClickMenuBar:() => void;
}


const Quick_Menu:QuickMenuItem[] = [
    { id: 1, name: "마이페이지", link: "#none", icon:CiUser },
    { id: 2, name: "장바구니", link: "/cart", icon:PiHandbagSimpleThin, cartCnt:true },
    { id: 3, name: "주문조회", link: "#none", icon:CiViewList  },
    { id: 4, name: "로그아웃", link: "#none", icon:CiLogout  },
];

const MenuQuick = ({cartCount,search,onChangeSearch,onClickMenuBar}:MenuQuickProps) => {
    const navigate = useNavigate();
    // 검색 버튼 클릭 또는 엔터 시 실행될 함수
    const handleSearchSubmit = (e:React.FormEvent) => {
        e.preventDefault(); // 페이지 새로고침 방지

        if (search.trim() === "") {
            alert("검색어를 입력해주세요!");
            return;
        }

        // 1. 검색 결과 페이지로 이동
        navigate('/searchList');
        
        // 2. 이동 후 슬라이드 메뉴 닫기
        onClickMenuBar(); 
    };

    const onClickQuick = (e:React.MouseEvent) => {
         onClickMenuBar(); 
    }

    return(
        <div className="menu-quick flex flex-col gap-[15px] border-b-[10px] border-[#FBFBFB] p-[20px_20px_30px_20px]">
            <div className="quick-menu flex items-baseline gap-[10px] ">
                {Quick_Menu.map((quick)=>
                    <div key={quick.id} className="flex-1 ">
                        <Link to={quick.link} onClick={onClickQuick}>
                            <div className="flex flex-col gap-[5px]">
                                <span className="relative mx-auto">
                                    <quick.icon className="w-6 h-6"/>
                                    <em className={`flex justify-center absolute bottom-[-7%] right-[0] w-[12px] h-[12px] leading-[12px] not-italic text-[10px] text-white bg-brand-color rounded-[100%] ${quick.cartCnt ? "block" : "hidden"}`}>{cartCount}</em>
                                </span>
                                <p className="text-[14px] text-center">{quick.name}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
            <div className="quick-search relative">
                <form onSubmit={handleSearchSubmit}>
                    <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어를 입력해 주세요' className='w-full h-[50px] border-b boder-black text-md'/>
                </form>
                <button type='submit' onClick={handleSearchSubmit} className='absolute top-1/2 right-0 -translate-y-1/2'><CiSearch size={24}/></button>
            </div>
        </div>
    )
}

export default MenuQuick;