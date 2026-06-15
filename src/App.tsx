import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
import { ShopContext } from './context/ShopContext'; 

function App() {
  const context = useContext(ShopContext);
  if (!context) return null;
  const { isHide } = context;

  return (
    <div className="body">
      <Loading />
      <ScrollToTop />
      <Header />
      
      <div className={`main ${isHide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list/:path' element={<List />} />
          <Route path='/searchList' element={<SearchList />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart type="cart" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      <Footer />
      <BottomMenu />
      <SlideMenu />
    </div>
  );
}

export default App;