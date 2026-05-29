import { useState } from 'react';
import Product from '../product/Product'
import {ProductItem} from './ProductData'

interface MainBestProps {
    prdData:ProductItem[];
    type:string;
    onAddCart?:(data:ProductItem) => void;
}
const Best = ({type,onAddCart,prdData}:MainBestProps) => {

    // 1. 초기 노출 상품 4개
    const [visibleCount,setVisibleCount] = useState(4);
    const totalProducts = 8; // 총 상품 개수

    // 2. 버튼 클릭 시 호출 될 함수
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <div className={`main-box box2 ${type} mt-[60px] lg:mt-[96px]`}>
            <div className="inner">
                <div className="main-title mb-5 lg:mb-10">
                    <h2 className="text-2xl font-bold lg:text-center lg:text-[36px]">SLOOM BEST</h2>
                </div>
                <Product items={prdData} type={type} limit={visibleCount} onAddCart={onAddCart}/>
                {visibleCount < totalProducts && (
                    <div onClick={handleShowMore} className='more-btn flex justify-center items-center gap-[10px] mt-[30px] p-[12px_10px] text-sm font-medium rounded-[10px] border border-[#c7c7c7] lg:inline-flex lg:relative lg:left-[50%] lg:translate-x-[-50%] lg:mt-[48px] lg:p-[16px_20px_16px_32px] lg:text-[18px]'>
                        상품 더 보기
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 10L12.0008 14.58L17 10" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Best;