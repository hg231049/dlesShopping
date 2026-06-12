import React, { useState, useEffect,createContext, useContext } from 'react';
import { Route,Routes,useNavigate,Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/Header';
import Home from './components/main/Home';
import Footer from './components/layout/footer/Footer';
import Loading from './components/layout/Loading';
import BottomMenu from './components/layout/BottomMenu';
import SlideMenu from './components/layout/slideMenu/SlideMenu';
import List from './components/layout/productList/List';
import SearchList from './components/layout/productList/SearchList';
import ProductDetail from './components/layout/detail/ProductDetail';
import Cart from './components/layout/Cart';
import ScrollToTop from "./components/layout/ScrollToTop";
import { ProductData,ProductItem } from './components/product/ProductData'

export const ShopContext = createContext<ShopContextProps| undefined>(undefined);
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
}


function App() {

  // 외부 무료 상품 데이터 api호출
  const [apiItems, setApiItems] = useState<any[]>([]); // 가공된 데이터를 담을 상자
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //  1. 서버에 데이터 요청하기
    fetch('https://dummyjson.com/products?limit=100')
      .then((res) => {
        // 안전장치 걸기 - 서버나 인터넷에 문제가 생겼을 때 메세지보내도록 방어벽
        if (!res.ok) throw new Error('서버 연결 실패!');
        return res.json(); //정상적인 경우 컴퓨터가 읽을 수 있는 깨끗한 데이터(json)로 변환
      })
      .then((data) => {
        //  2. [핵심] 서버에서 온 거친 데이터를 우리 마사지기 규격으로 완벽하게 번역(Formatting)합니다.
        const formatted = data.products.map((item: any) => {
          const dollarSalePrice = item.price;             // 서버가 준 최종 가격(할인가)
          const discountRate = item.discountPercentage;   // 서버가 준 할인율 (%)
          
          // 수학 공식으로 역산해서 원본 정가 구하기 (달러 기준)
          const dollarOrgPrice = dollarSalePrice / (1 - discountRate / 100);

          return {
            id: item.id,
            name: item.title,      // 팩스 이름(title) ➡️ 내 이름표(name)로 매칭!
            summary: item.category, // 카테고리를 서머리에 쏙!
            
            // 달러 가격에 1350원을 곱하고 반올림해서 완벽한 한화(원)로 환산!
            salePrice: Math.round(dollarSalePrice * 1350), 
            orgPrice: Math.round(dollarOrgPrice * 1350),   // 계산된 정가 세팅!
            
            thumb: item.thumbnail, // 썸네일(thumbnail) ➡️ 내 이미지(thumb)로 매칭!
            desc: [
              item.description, 
              `<div class="flex gap-[15px] text-gray-600">
                <div>평점: ${item.rating}</div>
                <div>재고: ${item.stock}개</div>
              </div>`, 
            ]
          };
        });

        setApiItems(formatted); // 변신 완료된 이쁜 데이터를 상자에 적재!
        setLoading(false);
      })
      .catch((err) => {
        console.error("데이터 변환 에러:", err);
        setLoading(false);
      });

    // 1초 스플래시 타이머 (기존 코드 유지)
    const timer = setTimeout(() => {
      setIsHide(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // 1. 로딩 스플래시
  // 초기에는 로딩 스플래시 나타남(= 숨김처리x)
  const [isHide,setIsHide] = useState(false);
  useEffect(() => {
    // 시간이 지나면 숨김처리
    const timer = setTimeout(() => {
        setIsHide(true);
      },1000)
      return () => clearTimeout(timer);
    },[])

    // 2. 장바구니 카운트
    const [cart,setCart] = useState<ProductItem[]>(() => {
      const savedCart = localStorage.getItem('cart');
    // 로컬스토리지에 데이터가 있으면 JSON으로 변환하고, 없으면 빈 배열([])을 기본값으로 사용합니다.
    return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]); // cart 배열이 바뀔 때마다 실행됨

    const addToCart = (ProductData:ProductItem) => {
      // 중복 추가 방지 로직 (선택사항: 이미 있으면 수량을 늘리거나 알림 처리)
      const isExist = cart.some((item) => item.id === ProductData.id);
      if (isExist) {
        alert("이미 장바구니에 담긴 상품입니다.");
        return;
      }

      setCart([...cart,ProductData])
      alert("장바구니에 추가되었습니다");
    }

    const onDeleteCart = (e:React.MouseEvent,id:number) => {
       e.preventDefault();
      e.stopPropagation();

      setCart(prev=>prev.filter(item => item.id !== id))
    }

    // 2. 모바일 햄버거 메뉴
    const [menuOpen,setMenuOpen] = useState(false);

    const onClickMenuBar = () => {
      setMenuOpen((prev)=>!prev);
    }
    // menuOpen 상태가 바뀔 때마다 실행
     useEffect(() => {
      if(menuOpen){
        document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
        // 컴포넌트가 언마운트(사라질) 때 스크롤 초기화 (안전장치)
        return () => { document.body.style.overflow = "unset"; }
    },[menuOpen])

    // 3. 검색
    const [search,setSearch] = useState("");
    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault(); // 페이지 새로고침 방지
        setSearch(e.target.value);
    } 


  return (
    
        <div className="body">
            <ShopContext.Provider value={{
              isHide,loading,cart,cartCount: cart.length,apiItems,search,menuOpen,
              addToCart,onChangeSearch,onDeleteCart,onClickMenuBar
            }}>
              <Loading/>
              <ScrollToTop />
              <Header/>
              <div className={`main ${isHide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/list/:path' element={<List/>}/>
                  <Route path='/searchList' element={<SearchList/>}/>
                  <Route path='/detail/:id' element={<ProductDetail/>}/>
                  <Route path='/cart' element={<Cart type="cart"/>}/>
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
              <Footer/>
              <BottomMenu/>
              <SlideMenu/>
          </ShopContext.Provider>
        </div>
    
  )
}

export default App
