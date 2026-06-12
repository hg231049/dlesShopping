import { useState,useContext } from 'react';
import { ShopContext } from '../../App'
import Product from '../product/Product'

interface MainNewProps {
    type:string;
}
const New = ({ type }:MainNewProps) => {
    const { apiItems,addToCart } = useContext(ShopContext);

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
                            <source src="https://pub-de7ed6d295f04d408489e1732161f4ac.r2.dev/etc/testVideo.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="prd-box max-w-[695px]">
                        <Product items={apiItems} type={type} limit={visibleCount} onAddCart={addToCart}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;