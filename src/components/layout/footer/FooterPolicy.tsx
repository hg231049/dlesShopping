interface PolicyMenuItem {
    id: number; 
    name:string;
    link:string;
    highlight?:boolean;
    textDeco?:boolean;
}
const Policy_Menu:PolicyMenuItem[] = [
  { id: 1, name: "주식회사 올릿리테일", link: "#none", textDeco:true},
  { id: 2, name: "개인정보처리방침", link: "#none" , highlight: true},
  { id: 3, name: "이용약관", link: "#none" },
];
const FooterPolicy = () => {
    return (
        <div className="Footer-policy absolute right-5 lg:static">
            <ul className={`
                flex flex-row gap-3 lg:flex-col lg:gap-6 
            `}>
                {Policy_Menu.map((item) => (
                <li key={item.id} className={`text-xs text-gray-400 lg:text-brand-color lg:text-sm ${item.highlight ? 'font-normal lg:font-bold' : 'font-normal'} ${item.textDeco ? 'hidden underline lg:block' : 'block no-underline'}`}>
                    <a href={item.link}>{item.name}</a>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterPolicy;