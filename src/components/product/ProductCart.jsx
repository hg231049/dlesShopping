import ProductPrice from './ProductPrice';


// 1. 가로형 (장바구니 섹션용)
const ProductCart = ({ item, counts, onClickPlus, onClickMinus }) => {
  
   const count = counts[item.id] || 1;

  const price =
    typeof item.salePrice === "number"
      ? item.salePrice
      : Number(String(item.salePrice).replace(/[^0-9]/g, ""));

  const totalPrice = price * count;

    return (
    <div className="flex gap-[10px] items-center lg:gap-[20px]">
        <div className="prd-thumb relative max-w-[105px] rounded-[5px] overflow-hidden flex-shrink-0 lg:max-w-[100px]">
            <img src={item.thumb} alt={item.name} className='w-full' />
        </div>
        <div className="prd-description flex items-baseline justify-between w-full gap-[10px] min-w-0">
            <div >
                <div className='mb-4 lg:flex lg:flex-col-reverse min-w-0'>
                    <div className="text-sm font-bold leading-[18px] truncate line-clamp-1 lg:text-[20px] lg:leading-[190%]">{item.name}</div>
                </div>
                <div className='inline-flex h-[28px] px-3 leading-[28px] border border-[#d3d3d3] rounded-[5px] [&_button]:text-[#d3d3d3] [&_button]:cursor-pointer'>
                    <button onClick={(e) => onClickMinus(e, item.id)} className='z-10'>-</button>				
                    <input readOnly value={count} className='w-[30px] text-center'/>
                    <button onClick={(e) => onClickPlus(e, item.id)} className='z-10'>+</button>	
                </div>	
            </div>
            <div className='flex items-center gap-[5px] text-brand-color text-[24px] font-bold'>
                {totalPrice.toLocaleString()}원
                <span className='text-sm font-normal text-black'>({count})개</span>
            </div>
        </div>
        
    </div>
  )
};

export default ProductCart;