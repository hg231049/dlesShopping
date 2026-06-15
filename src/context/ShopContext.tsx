/* 🛠️ 새로 만드는 파일: src/context/ShopContext.tsx */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { ProductItem } from '../components/product/ProductData'; 

interface ShopContextProps {
  apiItems: any[];
  loading: boolean;
  isHide: boolean;
  cart: any[];
  cartCount: number;
  addToCart: (product: any) => void;
  onDeleteCart: (e: React.MouseEvent, id: number) => void;
  menuOpen: boolean;
  onClickMenuBar: () => void;
  search: string;
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  counts: Record<number, number>;
  onClickPlus: (e: React.MouseEvent, id: number) => void;
  onClickMinus: (e: React.MouseEvent, id: number) => void;
}

export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
  const [apiItems, setApiItems] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [isHide, setIsHide] = useState(false);
  const [cart, setCart] = useState<ProductItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [counts, setCounts] = useState<Record<number, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // 서버 데이터 API 호출
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => {
        if (!res.ok) throw new Error('서버 연결 실패!');
        return res.json();
      })
      .then((data) => {
        const formatted = data.products.map((item: any) => {
          const dollarSalePrice = item.price;            
          const discountRate = item.discountPercentage;   
          const dollarOrgPrice = dollarSalePrice / (1 - discountRate / 100);
          return {
            id: item.id,
            name: item.title,      
            summary: item.category, 
            salePrice: Math.round(dollarSalePrice * 1350), 
            orgPrice: Math.round(dollarOrgPrice * 1350),   
            thumb: item.thumbnail, 
            desc: [
              item.description, 
              `<div class="flex gap-[15px] text-gray-600"><div>평점: ${item.rating}</div><div>재고: ${item.stock}개</div></div>`, 
            ]
          };
        });
        setApiItems(formatted); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("데이터 변환 에러:", err);
        setLoading(false);
      });

    const timer = setTimeout(() => setIsHide(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 로컬스토리지 연동
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); 

  // 장바구니 추가/삭제 및 수량 조절 함수들
  const addToCart = (ProductData: ProductItem) => {
    const isExist = cart.some((item) => item.id === ProductData.id);
    if (isExist) { alert("이미 장바구니에 담긴 상품입니다."); return; }
    setCart([...cart, ProductData]);
    alert("장바구니에 추가되었습니다");
  };

  const onClickPlus = (e: React.MouseEvent, id: number) => {
    e.preventDefault(); e.stopPropagation();
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const onClickMinus = (e: React.MouseEvent, id: number) => {
    e.preventDefault(); e.stopPropagation();
    setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };

  const onDeleteCart = (e: React.MouseEvent, id: number) => {
    e.preventDefault(); e.stopPropagation();
    setCart(prev => prev.filter(item => item.id !== id));
    setCounts((prev) => { const copy = { ...prev }; delete copy[id]; return copy; });
  };

  // 모바일 메뉴 및 검색 함수들
  const onClickMenuBar = () => setMenuOpen((prev) => !prev);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; }
  }, [menuOpen]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault(); 
    setSearch(e.target.value);
  };

  return (
    <ShopContext.Provider value={{
      isHide, loading, cart, cartCount: cart.length, apiItems, search, menuOpen,
      addToCart, onChangeSearch, onDeleteCart, onClickMenuBar, counts, onClickPlus, onClickMinus
    }}>
      {children}
    </ShopContext.Provider>
  );
};