import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/main/Home';
import Footer from './components/layout/Footer';
import Loading from './components/layout/Loading';
import BottomMenu from './components/layout/BottomMenu';
import SlideMenu from './components/layout/SlideMenu';

function App() {
  // 1. 로딩 스플래시
  // 초기에는 로딩 스플래시 나타남(= 숨김처리x)
  const [isHide,setIsHide] = useState(false);
  useEffect(() => {
    // 시간이 지나면 숨김처리
    const timer = setTimeout(() => {
        setIsHide(true);
      },1500)
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
      setMenuOpen((prev)=>!prev)
    }

  return (
    <div className="body">
      <Loading isHide={isHide}/>
      <Header cartCount={cartCount} />
      <div className={`main ${isHide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Home onAddCart={addToCart}/>
      </div>
      <Footer/>
      <BottomMenu cartCount={cartCount} onClickMenuBar={onClickMenuBar} />
      <SlideMenu onClickMenuBar={onClickMenuBar} menuOpen={menuOpen}/>
    </div>
  )
}

export default App
