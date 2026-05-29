interface FooterCsItem {
    id: number; 
    name:string;
    subTxt:string;
}
const Footer_Cs:FooterCsItem[] = [
  { id: 1, name: "1588-1303", subTxt: "평일 11:00 ~ 16:00 \n점심시간 12:30 ~ 13:30"},
  { id: 2, name: "1:1 채널톡", subTxt: "월~목 09:30 ~ 17:00 \n금 09:30 ~ 16:00 \n점심시간 12:30 ~ 13:30"},
];
const FooterCs = () => {
    return (
        <div className="Footer-cs">
            <div className="flex justify-between items-center mb-3 text-black lg:hidden ">
                <h2 className="text-sm font-bold">고객센터</h2>
                <p className="text-xs">주말 및 공휴일 휴무</p>
            </div>
            <div className={`
                flex flex-col gap-2 lg:gap-4 lg:flex-row
            `}>
                {Footer_Cs.map((item) => (
                <div key={item.id} className="flex justify-between flex-row min-h-[92px] text-brand-color p-4 rounded-[5px] bg-white lg:flex-col lg:gap-8 lg:w-[360px]  lg:p-[24px_20px]">
                    <h3 className="text-base font-bold leading-none lg:text-[32px]">{item.name}</h3>
                    <p className="text-xs whitespace-pre-wrap leading-[18px] lg:text-[13px] lg:leading-[22px]">{item.subTxt}</p>
                </div>
                ))}
            </div>
            <p className="copy mt-[30px] text-xs text-gray-400 lg:text-right lg:mt-6">ⓒ 슬룸(주). All Rights Reserved.</p>
        </div>
    );
}

export default FooterCs;