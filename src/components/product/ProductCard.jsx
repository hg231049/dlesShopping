import ProductPrice from './ProductPrice';
import { IconCart } from '../icon/Icon';

// 2. 카드형 (Best 섹션용)
const ProductCard = ({ item, index, showIndex,onAddCart }) => (
  <div className="prd-item">
    <div className="prd-thumb relative rounded-[5px] overflow-hidden">
        {/* 2. showIndex가 true일 때만 렌더링 */}
        {showIndex && (
            <span className='absolute top-0 left-0 p-[7px_11px] text-white text-sm leading-none bg-brand-color rounded-[5px_0] z-10 lg:p-[13px_20px] lg:text-[24px]'>
                {index + 1}
            </span>
        )}
        <span className='block overflow-hidden'>
            <img src={item.thumb} alt={item.name} className="w-full" />
        </span>
        <span className="cart absolute bottom-[10px] right-[10px]" 
            onClick={(e) => {
                e.preventDefault(); // 링크 이동 방지
                e.stopPropagation(); // 이벤트 버블링 방지 (안전장치)
                onAddCart(item,1);
            }}
        >
            <IconCart/>
        </span>
    </div>
    <div className="prd-description">
    <div className="m-[10px_0_5px] text-sm font-bold leading-[ 98.629%] truncate line-clamp-1 lg:text-[22px] lg:m-[16px_0_18px]">
        {item.name}
    </div>
    <ProductPrice 
        orgPrice={item.orgPrice} 
        salePrice={item.salePrice} 
        percent={item.percent} 
        className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-end lg:gap-[9px]" 
    />
    </div>
  </div>
);

export default ProductCard;