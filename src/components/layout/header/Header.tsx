import { useState, useEffect } from 'react';
import TopBn from './TopBn';
import SUBGNB from './SUBGNB';
import GNB from './GNB';
import UserMenu from './UserMenu';
import Logo from '../Logo';

interface HeaderProps {
    cartCount:number;
}

const Header = ({cartCount}:HeaderProps) => {
    // 초기 상태에는 고정x
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤이 100px 이상 내려가면 고정
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // 컴포넌트가 사라질 때 이벤트 제거 (메모리 누수 방지)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header>
            <TopBn/>
            <div className="inner">
                <div className="flex justify-between items-center my-[15px] md:my-[20px]">
                    <Logo/>
                    <div className='header-left flex gap-[73px] items-center'>
                        <div className="hidden lg:block">
                            <SUBGNB/>
                        </div>
                        <UserMenu cartCount={cartCount}/>
                    </div>
                </div>
                
            </div>
            <div className={`fixed-gnb w-full transition-all ${isFixed ? 'fixed top-0 left-0 bg-white/35 backdrop-blur-md shadow-md z-20' : 'relative'}`}>
                <div className="inner">
                    <GNB/>
                </div>
            </div>
        </header>
    );
}

export default Header;