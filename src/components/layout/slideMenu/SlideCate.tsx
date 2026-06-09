import { useState } from "react";

interface SubMenuItems {
    id: number; 
    name: string; 
    link:string;
}
interface CateMenuItems {
    id: number; 
    name: string; 
    link:string;
    subItems?:SubMenuItems[];
}

const cateMenu:CateMenuItems[] = [
    {   
        id: 1, name: "제품구매하기", link: "#none",
        subItems : [
            { id: 1, name: "전상품", link: "#none"},
            { id: 2, name: "단독세트", link: "#none"},
            { id: 3, name: "베스트", link: "#none"},
            { id: 4, name: "신상품", link: "#none"},
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

const SlideCate = () => {
    const [openCate,setOpenCate] = useState(null);

    const onClickCate = (id:number) => {
        setOpenCate(openCate === id ? null : id);
        
    }
    return(
        <div className="menu-wrap py-[5px] px-5 border-b-[10px] border-[#FBFBFB]">
                <div className="cate">
                    <ul>
                        {cateMenu.map((item)=>
                        <li key={item.id} value={openCate} onClick={()=>onClickCate(item.id)} >
                            <div className="relative">
                                <p className="p-[15px_0_10px] text-[18px] font-bold"><a href={item.link}>{item.name}</a></p>
                                {item.subItems &&(
                                <div className={`absolute top-1/2 right-0 -translate-y-1/2transition-all duration-500 ease-in-out  ${openCate === item.id  ? "rotate-180" : "rotate-0"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17 10L11.9992 14.58L7 10" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                )}
                            </div>
                             
                                <div className={`subCate overflow-hidden transition-all duration-500 ease-in-out ${openCate ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                    {openCate === item.id &&
                                    <ul className="[&_li]:p-[9px_0_9px_10px] [&_li]:text-[16px]">
                                        {item.subItems.map((subItems,idx)=>
                                            <li key={`${item.id}-${subItems.id}`}><a href={subItems.link}>{subItems.name}</a></li>
                                        )}
                                    </ul>
                                    }
                                </div>
                            
                        </li>
                        )}
                    </ul>
                </div>
            </div>
    )
}

export default SlideCate;