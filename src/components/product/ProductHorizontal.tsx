import ProductPrice from './ProductPrice';
import { PiHandbagSimpleThin } from "react-icons/pi";
import {ProductItem} from './ProductData'

interface ProductHorizontalProps {
    item:ProductItem;
    // product:ProductItem -> 함수 자체가 실행될 때 상품 1개가 필수로 필요
    onAddCart:(product:ProductItem) => void;
}

// 1. 가로형 (New 섹션용)
const ProductHorizontal = ({ item,onAddCart }:ProductHorizontalProps) => (
  <div className="flex gap-[10px] items-center lg:gap-[20px]">
    <div className="prd-thumb relative max-w-[105px] rounded-[5px] overflow-hidden flex-shrink-0 lg:max-w-[200px]">
        <img src={item.thumb} alt={item.name} className='w-full' />
        <span className="cart absolute bottom-[10px] right-[10px]" 
                onClick={(e) => {
                    e.preventDefault(); // 링크 이동 방지
                    e.stopPropagation(); // 이벤트 버블링 방지 (안전장치)
                    onAddCart(item);
                }}
            >
            <PiHandbagSimpleThin/>
        </span>
    </div>
    <div className="prd-description flex flex-col gap-[10px] min-w-0">
        <div className='lg:flex lg:flex-col-reverse min-w-0'>
            <div className="text-[#616161] text-[10px] leading-[190%] lg:text-[16px] lg:leading-[237.5%] lg:text-[#8E8E93]">{item.summary}</div>
            <div className="text-sm font-bold leading-[18px] line-clamp-1 lg:text-[20px] lg:leading-[190%]">{item.name}</div>
        </div>
        <ProductPrice 
            orgPrice={item.orgPrice} 
            salePrice={item.salePrice} 
            className="flex flex-row-reverse justify-end items-baseline leading-normal gap-[4px] lg:gap-[10px] lg:items-end" 
        />
    </div>
  </div>
);

export default ProductHorizontal;