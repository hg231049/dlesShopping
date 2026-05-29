import { useEffect } from 'react';

interface LoadingProps {
    isHide:boolean;
}

const Loading = ({isHide}:LoadingProps) => {
    return (
        <div 
            id="page-loader" 
            className={`flex items-center justify-center fixed inset-0 z-[9999] bg-white transition-all duration-700 ease-in-out ${
                isHide ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
            }`}
            >
            <div className="loader-inner text-center">
                <img src="https://cdn.imweb.me/upload/S20200901a942bae14250b/9658df763d29d.png" alt="SLOOM" className='custom-loader-img max-w-[181px] w-[80%] mx-auto  ' />
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