import { useState, useEffect } from 'react';
import { Route,Routes,useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/Header';
import Home from './components/main/Home';
import Footer from './components/layout/footer/Footer';
import Loading from './components/layout/Loading';
import BottomMenu from './components/layout/BottomMenu';
import SlideMenu from './components/layout/slideMenu/SlideMenu';
import List from './components/layout/productList/List';
import SearchList from './components/layout/productList/SearchList';
import { ProductData } from './components/product/ProductData'

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
    const [cartCount,setCartCount] = useState(0);

    const addToCart = () => {
      setCartCount(prev => prev + 1)
      alert("장바구니에 추가되었습니다");
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
    const onChangeSearch = (e) => {
        e.preventDefault(); // 페이지 새로고침 방지
        setSearch(e.target.value);
    } 

  return (
    
        <div className="body">
          <Loading isHide={isHide}/>
          <Header cartCount={cartCount} />
          <div className={`main ${isHide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <Routes>
              <Route path='/home' element={<Home  prdData={ProductData} onAddCart={addToCart}/>}/>
              <Route path='/list' element={<List prdData={ProductData} onAddCart={addToCart}/>}/>
              <Route path='/searchList' element={<SearchList prdData={ProductData} onAddCart={addToCart} search={search} onChangeSearch={onChangeSearch}/>}/>
            </Routes>
          </div>
          <Footer/>
          <BottomMenu cartCount={cartCount} onClickMenuBar={onClickMenuBar} />
          <SlideMenu onClickMenuBar={onClickMenuBar} menuOpen={menuOpen} cartCount={cartCount} search={search} onChangeSearch={onChangeSearch}/>
        </div>
    
  )
}

export default App
