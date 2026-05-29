interface SubMenuListItem {
    id: number; 
    name:string;
    link:string;
}

const SUB_MENU_LIST:SubMenuListItem[] = [
  { id: 1, name: "신규 회원 혜택", link: "#none" },
  { id: 2, name: "제품 사용법", link: "#none" },
  { id: 3, name: "브랜드", link: "#none" },
  { id: 4, name: "고객지원", link: "#none" },
  { id: 5, name: "비즈니스 제안", link: "#none" },
];
const GNB = () => {
    return (
        <nav>
            <ul className="flex gap-[48px]">
                {SUB_MENU_LIST.map((item) => (
                    <li key={item.id} ><a href={item.link} className="text-black font-bold text-lg">{item.name}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default GNB;