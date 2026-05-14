import { useState } from "react";

const userBenefit = [
    { id: 1, name: "쿠폰", link: "#none", count:"1개" },
    { id: 2, name: "적립금", link: "#none", count:"1,000,000원" },
    { id: 3, name: "작성 가능 리뷰", link: "#none", count:"0개"},
];
const cateMenu = [
    {   
        id: 1, name: "제품구매하기", link: "#none",
        subItems : [
            { id: 1, name: "전상품", link: "#none"},
            { id: 2, name: "단독세트", link: "#none"},
            { id: 3, name: "베스트", link: "#none"},
            { id: 3, name: "전상품", link: "#none"},
        ]
    },
    {   
        id: 2, name: "고객관리", link: "#none",
        subItems : [
            { id: 1, name: "공지사항", link: "#none"},
            { id: 2, name: "리뷰", link: "#none"},
            { id: 3, name: "faq", link: "#none"},
        ]
    },
    {   
        id: 3, name: "신규회원혜택", link: "#none",
    },
    {   
        id: 4, name: "브랜드", link: "#none",
        subItems : [
            { id: 1, name: "브랜드스토리", link: "#none"},
            { id: 2, name: "수상/기부", link: "#none"},
        ]
    },
];

const SlideMenu = ({onClickMenuBar,menuOpen}) => {
    
    const [openMenu,setOpenMenu] = useState(null);

    const onClickMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    }

    return (
        <div className={`slideMenu fixed top-0 w-full h-full z-50 bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${menuOpen ? "left-0" : "left-[-100%]"}`} >
            <div className="menu-header text-white bg-brand-color">
                <div className="user-info p-[20px_20px_10px_20px] ">
                    <div className="flex items-center gap-[4px]">
                        <h3 className="text-[18px] font-bold">이은서</h3>
                        <div className="flex justify-center items-center p-[1px_6px] rounded-[5px] bg-[#ECDDCD]"><span className="text-sm text-brand-color font-medium">웰컴</span></div>
                    </div>
                    <p className="p-[4px_0_0] text-[14px]">하루의 피로, 슬룸으로 새로고침</p>
                    <button onClick={onClickMenuBar} className="absolute top-5 right-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M18 18L6 6" stroke="white" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="user-benefit p-[10px_20px_27px]">
                    <div className="flex">
                        {userBenefit.map((item)=>
                        <div className="flex flex-col gap-[8px] flex-1 text-center">
                            <a href={item.link}>
                                <h4 className="text-[12px]">{item.name}</h4>
                                <p className="text-[18px] font-bold">{item.count}</p>
                            </a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="menu-wrap p-5">
                <div className="cate">
                    <ul>
                        {cateMenu.map((item)=>
                        <li value={openMenu} onClick={()=>onClickMenu(item.id)} >
                            <div className="relative">
                                <p className="p-[15px_0_10px] text-[18px] font-bold"><a href={item.link}>{item.name}</a></p>
                                {item.subItems &&(
                                <div className="absolute top-1/2 right-0 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17 10L11.9992 14.58L7 10" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                )}
                            </div>
                             {openMenu === item.id &&
                                <div className={`subCate overflow-hidden transition-all duration-500 ease-in-out ${openMenu ? "max-height-[500px] opacity-100" : "max-height-0 opacity-0"}`}>
                                    <ul className="[&_li]:p-[9px_0_9px_10px] [&_li]:text-[16px]">
                                        {item.subItems.map((subItems,idx)=>
                                            <li><a href={subItems.link}>{subItems.name}</a></li>
                                        )}
                                    </ul>
                                </div>
                            }
                        </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="menu-footer"></div>
        </div>
    )
}

export default SlideMenu;