import { useContext } from 'react';
import { ShopContext } from '../../App'
import Logo from '../layout/Logo';

const Loading = () => {
    const { isHide } = useContext(ShopContext);
    return (
        <div 
            id="page-loader" 
            className={`flex items-center justify-center fixed inset-0 z-[9999] bg-white transition-all duration-700 ease-in-out ${
                isHide ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
            }`}
            >
            <div className="loader-inner text-center">
                <span className='custom-loader-img'>
                    <Logo/>
                </span>
            </div>
            <style>
                {`
                    .custom-loader-img {
                        animation: loaderFade 1s ease-in-out infinite;
                    }

                    @keyframes loaderFade {
                        0%, 100% { opacity: 0.4; }
                        50% { opacity: 1; }
                    }
                `}
            </style>
        </div>
    )   

}
 
export default Loading;