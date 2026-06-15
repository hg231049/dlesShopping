import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css';     
import 'swiper/css/effect-fade';   
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext'

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ShopProvider>
                <App />
            </ShopProvider>
        </BrowserRouter>
  </React.StrictMode>,
)
