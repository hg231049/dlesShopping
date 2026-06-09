import ProductPrice from './ProductPrice';
import {ProductItem} from './ProductData'

interface ProductCartProps {
    item:ProductItem;
    counts:Record<number,number>;
    onClickPlus:(e:React.MouseEvent,id:number) => void;
    onClickMinus:(e:React.MouseEvent,id:number) => void;
    onDeleteCart:(e:React.MouseEvent,id:number) => void;
}

// 1. 가로형 (장바구니 섹션용)
const ProductCart = ({ item, counts, onClickPlus, onClickMinus,onDeleteCart }:ProductCartProps) => {
  
   const count = counts[item.id] || 1;

  const price =
    typeof item.salePrice === "number"
      ? item.salePrice
      : Number(String(item.salePrice).replace(/[^0-9]/g, ""));

  const totalPrice = price * count;

    return (
    <div className="flex gap-[10px] items-center lg:gap-[20px]">
        {/* 상품썸네일 */}
        <div className="prd-thumb relative max-w-[105px] rounded-[5px] overflow-hidden flex-shrink-0 lg:max-w-[100px]">
            <img src={item.thumb} alt={item.name} className='w-full' />
        </div>
        <div className="prd-description flex flex-wrap items-end justify-between w-full gap-[10px] min-w-0">
            {/* 상품정보, 수량선택 */}
            <div>
                <div className='mb-4 lg:flex lg:flex-col-reverse min-w-0'>
                    <div className="text-sm font-bold leading-[18px] lg:text-[20px] lg:leading-[190%]">{item.name}</div>
                </div>
                <div className='inline-flex h-[28px] px-3 leading-[28px] border border-[#d3d3d3] rounded-[5px] [&_button]:text-[#d3d3d3] [&_button]:cursor-pointer'>
                    <button onClick={(e) => onClickMinus(e, item.id)} className='z-10'>-</button>				
                    <input readOnly value={count} className='w-[30px] text-center'/>
                    <button onClick={(e) => onClickPlus(e, item.id)} className='z-10'>+</button>	
                </div>	
            </div>
            {/* 가격 + 삭제 버튼 */}
            <div className='flex items-center gap-[5px] text-brand-color lg:text-[24px] font-bold lg:flex-row'>
                {totalPrice.toLocaleString()}원
                <span className='hidden text-sm font-normal text-black lg:block'>({count})개</span>
                <div>
                    <button onClick={(e)=>onDeleteCart(e,item.id)} className='cursor-pointer '>X</button>
                </div>
            </div>
            
        </div>
        
    </div>
  )
};

export default ProductCart;