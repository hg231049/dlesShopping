import {ProductItem} from '../../product/ProductData';
interface BuyBtnProps {
    product:ProductItem;
    onAddCart: () => void;
}

const BuyBtn = ({product,onAddCart}:BuyBtnProps) => {
    return (
        <>
            <div className="prdBuyBtn mt-[30px]">
                <div className='flex gap-[11px] [&_button]:flex-1 [&_button]:p-[16px_0] [&_button]:text-[#616161] [&_button]:text-[18px] [&_button]:text-center [&_button]:font-medium [&_button]:border [&_button]:border-[#ccc] [&_button]:cursor-pointer'>
                    <button className='!text-white bg-brand-color'>구매하기</button>
                    <button className='hidden lg:block'>선물하기</button>
                    <button onClick={() => onAddCart(product)}>장바구니</button>
                </div>
            </div>
        </>
    )
}

export default BuyBtn;