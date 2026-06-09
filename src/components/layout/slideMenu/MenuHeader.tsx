
interface userBenefitItem {
    id: number;
    name: string;
    link: string;
    count:string;
}

interface MenuHeaderProps {
    onClickMenuBar:() => void;
}


const userBenefit:userBenefitItem[] = [
    { id: 1, name: "쿠폰", link: "#none", count:"1개" },
    { id: 2, name: "적립금", link: "#none", count:"1,000,000원" },
    { id: 3, name: "작성 가능 리뷰", link: "#none", count:"0개"},
];
const MenuHeader = ({onClickMenuBar}:MenuHeaderProps) => {
    return(
        <div className="menu-header text-white bg-brand-color">
                <div className="user-info p-[20px_20px_10px_20px] ">
                    <div className="flex items-center gap-[4px]">
                        <h3 className="text-[18px] font-bold">이은서</h3>
                        <div className="flex justify-center items-center p-[1px_6px] rounded-[5px] bg-[#ECDDCD]"><span className="text-xs text-brand-color font-medium">웰컴</span></div>
                    </div>
                    <p className="p-[4px_0_0] text-[14px]">하루의 마무리를 함께하세요</p>
                    <button onClick={onClickMenuBar} className="absolute top-5 right-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M18 18L6 6" stroke="white" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
                <div className="user-benefit p-[10px_20px_27px]">
                    <div className="flex">
                        {userBenefit.map((item)=>
                        <div key={item.id} className="flex flex-col gap-[8px] flex-1 text-center">
                            <a href={item.link}>
                                <h4 className="text-[12px]">{item.name}</h4>
                                <p className="text-[18px] font-bold">{item.count}</p>
                            </a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default MenuHeader;