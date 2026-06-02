import {ProductItem} from '../../product/ProductData';
interface PrdInfoProps {
    product:ProductItem;
    displayPercent: number;
    formatPrice:(price: number | string) => string;
}
const PrdInfo = ({product,displayPercent,formatPrice}:PrdInfoProps) => {
    return (
        <>
            <div className="info-top">
                <h1 className='text-[24px] font-bold lg:mb-5 lg:pb-5  lg:border-b border-[#D3D3D3]'>{product.name}</h1> 
                       <div className="prdPriceWrap flex gap-[10px] items-center mb-5">
                            <div className='flex gap-[10px] text-[22px] lg:text-[24px] font-bold'>
                                <span className='text-[#FE2B00]'>{displayPercent}%</span>
                                {formatPrice(product.salePrice)}
                            </div>
                            <div className='text-[#ACACAC] text-[20px] font-medium line-through'>{formatPrice(product.orgPrice)}</div>
                       </div>
                       <div className="summary">
                        <ul className='flex flex-col gap-[14px]'>
                            {product.desc?.map((descItem:string, idx:number) => 
                                <li
                                    key={idx}
                                    dangerouslySetInnerHTML={{ __html: descItem }}
                                    className="text-md font-medium"
                                />
                            )}
                        </ul>
                      </div>
            </div>
        </>
    )
}

export default PrdInfo;