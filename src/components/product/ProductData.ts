import { prd1,prd2 } from '../../assets/main';
interface ProductItem {
    id: number;
    name: string; 
    summary: string;
    orgPrice: number;
    salePrice: number; 
    thumb: string;
    desc :string[];
}
export const ProductData: ProductItem[] = [
    {   id: 1,
        name: "종아리 마사지기", 
        summary: "프리미엄 EMS저주파",
        orgPrice: 260000, 
        salePrice: 149000, 
        thumb: prd1,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ],
     },
    { 
        id: 2, 
        name: "프리미엄 발 마사지기",
        summary: "프리미엄 EMS저주파",
        orgPrice: 200000, 
        salePrice: 109000, 
        thumb: prd2,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ],
     },
    { 
        id: 3, 
        name: "목마사지기", 
        summary: "", 
        orgPrice: 260000, 
        salePrice: 149000, 
        thumb: prd2,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ], 
    },
    { 
        id: 4,
        name: "경추 목 마사지기 베개", 
        summary: "", 
        orgPrice: 200000, 
        salePrice: 109000, 
        thumb: prd1,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ], 
    },
    { 
        id: 5, 
        name: "허리마사지기", 
        summary: "프리미엄 EMS저주파", 
        orgPrice: 149000, 
        salePrice: 149000,  
        thumb: prd1 ,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ],
    },
    { 
        id: 6, 
        name: "쿨링매트", 
        summary: "프리미엄 EMS저주파",  
        orgPrice: 200000, 
        salePrice: 109000, 
        thumb: prd2,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ], 
    },
    { 
        id: 7, 
        name: "골반마사지기", 
        summary: "", 
        orgPrice: 260000, 
        salePrice: 149000, 
        thumb: prd2,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ], 
    },
    { 
        id: 8, 
        name: "손마사지기", 
        summary: "", 
        orgPrice: 200000, 
        salePrice: 109000, 
        thumb: prd1,
        desc : [
            "✔️ 에어펌프 괄사패드 이중케어", 
            "✔️ 5.5L 에어펌프 & 5중 에어셀로 밀착 압박",
            "✔️ 30일 무료체험"
        ], 
    },
];