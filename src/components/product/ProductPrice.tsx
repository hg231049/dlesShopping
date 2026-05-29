// ProductPrice.jsx (또는 Product.jsx 상단)
import {ProductItem} from './ProductData'

interface ProductPriceProps {
  orgPrice:number;
  salePrice:number;
  className?:string; 
}

  function calcDiscount(salePrice:number, orgPrice:number) {
    if (!salePrice || !orgPrice || orgPrice <= salePrice) return 0;
    return Math.round((orgPrice - salePrice) / orgPrice * 100);
  }
 

const ProductPrice = ({ orgPrice, salePrice, className = "" }:ProductPriceProps) => {
   const displayPercent = calcDiscount(salePrice, orgPrice);
   const formatPrice = (price:number):string => {
    return typeof price === 'number' ? `${price.toLocaleString()}원` : price;
  };
  return (
      <div className={`prd-price-wrap ${className}`}>
        {orgPrice !== salePrice && 
          <div className='text-xs text-[#ACACAC] line-through lg:text-[18px]'>{formatPrice(orgPrice)}</div>
        }
        <div className='flex gap-[7px] items-center text-base font-bold lg:text-[24px] [.new_&]:lg:flex-col [.new_&]:lg:items-baseline [.new_&]:lg:gap-0'>
          {displayPercent > 0 && (
            <span className='text-sale-color lg:text-[26px]'>{displayPercent}%</span>
            )
          }
          {formatPrice(salePrice)}
        </div>
      </div>
    )
};

export default ProductPrice;