import React, { useState, useEffect } from 'react';
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
function App() {
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
          <Loading isHide={isHide}/>
           <ScrollToTop />
          <Header cartCount={cart.length} />
          <div className={`main ${isHide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <Routes>
              <Route path='/' element={<Home prdData={ProductData} onAddCart={addToCart}/>}/>
              <Route path='/list/:path' element={<List prdData={ProductData} onAddCart={addToCart}/>}/>
              <Route path='/searchList' element={<SearchList prdData={ProductData} onAddCart={addToCart} search={search} onChangeSearch={onChangeSearch}/>}/>
              <Route path='/detail/:id' element={<ProductDetail prdData={ProductData} onAddCart={addToCart}/>}/>
              <Route path='/cart' element={<Cart type="cart" cart={cart} onDeleteCart={onDeleteCart}/>}/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer/>
          <BottomMenu cartCount={cart.length} onClickMenuBar={onClickMenuBar} />
          <SlideMenu onClickMenuBar={onClickMenuBar} menuOpen={menuOpen} cartCount={cart.length} search={search} onChangeSearch={onChangeSearch}/>
        </div>
    
  )
}

export default App
