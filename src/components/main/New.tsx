import { useState } from 'react';
import Product from '../product/Product'
import {ProductItem} from './ProductData'

interface MainNewProps {
    prdData:ProductItem[];
    type:string;
    onAddCart?:(data:ProductItem) => void;
}
const New = ({ type,onAddCart,prdData }:MainNewProps) => {
    // 1. 초기 노출 상품 4개
    const [visibleCount,setVisibleCount] = useState(3);

    return (

        <div className={`main-box box4 rowGrid ${type} my-[70px] lg:my-[96px_120px]`}>
            <div className="inner">
                <div className="main-title mb-5 lg:mb-10">
                    <h2 className="text-2xl font-bold lg:text-center lg:text-[36px]">NEW ITEM</h2>
                </div>
                <div className="new-wrap flex flex-col gap-[10px] lg:flex-row lg:gap-[50px]">
                    <div className="video-box max-w-[855px] w-full lg:aspect-[855/680]">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline preload="metadata" className="block w-full h-full rounded-[10px] object-fill">
                            <source src="https://pub-de7ed6d295f04d408489e1732161f4ac.r2.dev/MAIN/sloom_newBn_pillow.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="prd-box max-w-[695px]">
                        <Product items={prdData} type={type} limit={visibleCount} onAddCart={onAddCart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;