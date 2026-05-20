import Product from "../../components/product/Product";
const Cart = ({cart,type}) => {
    return(
        <div className={`rowGrid pb-[120px]`}>
            <div className="inner">
                <div className="titleArea p-[20px_0_40px] lg:p-[40px_0_80px] text-center ">
                    <h1 className="text-[24px] lg:text-[36px] font-bold">장바구니</h1>
                </div>
                {cart.length === 0 ? (
                    <p className="py-20 text-gray-400 text-center">장바구니가 비었습니다.</p>
                ) : (
                <Product type={type} items={cart} className="gap-y-20" />
                )}
            </div>
        </div>
    )
}

export default Cart;