import { useParams } from 'react-router-dom';
import { useState,useReducer } from 'react';

function reducer(state,action){

    switch(action.type){
        case 'INCREASE' : return state + action.data;
        case 'DECREASE' : return state - action.data > 0 ? state - action.data : 1;
        default:return state;
    }

}

const ProductDetail = ({prdData,onAddCart}) => {
    // useParams : 현재 브라우저 주소창(URL)에 적힌 파라미터(변수) 값을 쏙 빼서 쓸 수 있게 해주는 도구
    const { id } = useParams(); // 주소창의 :id 값을 가져옵니다 (문자열)

    // 1. prdData에서 주소창의 id와 일치하는 상품 하나를 찾습니다.
    // id는 숫자고 useParams로 가져온 건 문자열이라 Number()로 맞춰줍니다.
    const product = prdData.find(item => item.id === Number(id));

    // 만약 상품이 없다면 예외 처리
    if (!product) {
        return <div className="py-20 text-center">상품을 찾을 수 없습니다.</div>;
    }

    // 총 상품 가격 및 개수
    const [state,dispatch] = useReducer(reducer,1);
    const onClickPlus = () => {
       dispatch({
            type:"INCREASE",
            data:1,
       })
    }; 
    const onClickMinus = () => {
       dispatch({
            type:"DECREASE",
            data:1,
       })
    }; 

    // /[^0-9]/g : 숫자 0~9가 아닌 모든 것을 찾아 없엔 문자열을 숫자형으로 변환
    const numTotalPrice = typeof product.salePrice === "number" ? product.salePrice : Number(String(product.salePrice).replace(/[^0-9]/g, ''));
    const totalPrice = numTotalPrice * state;
    //console.log(numTotalPrice.toLocaleString());

    return (
        <div className='prdDetail'>
            <div className="inner">
                <div className="flex flex-col gap-5 p-[0_0_100px] lg:gap-25 lg:p-[40px_0_100px] lg:flex-row">
                    <div className="detailThumb max-w-[700px] w-full">
                        <img src={product.thumb} alt={product.name} className='w-full'/>
                    </div>
                    <div className="prdInfo w-full">
                       <h1 className='text-[24px] font-bold lg:mb-5 lg:pb-5  lg:border-b border-[#D3D3D3]'>{product.name}</h1> 
                       <div className="prdPriceWrap flex gap-[10px] items-baseline mb-5">
                            <div className='flex gap-[10px] text-[22px] lg:text-[24px] font-bold'>
                                <span className='text-[#FE2B00]'>{product.percent}</span>
                                {product.salePrice}
                            </div>
                            <div className='text-[#ACACAC] text-[20px] font-medium line-through'>{product.orgPrice}</div>
                       </div>
                       <ul className='flex flex-col gap-[14px]'>
                        {product.desc?.map((descItem, idx) => 
                            <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: descItem }}
                                className="text-md font-medium"
                            />
                        )}
                      </ul>
                      <div className="totalPrice flex justify-between items-center mt-[30px] pt-[10px] border-t border-[#D3D3D3]">
                        <div className="flex items-center gap-5">			
                            <p className='font-bold text-md'>총 구매 금액</p>	
                            <div className='h-[28px] px-3 leading-[28px] border border-[#d3d3d3] rounded-[5px] [&_button]:text-[#d3d3d3] [&_button]:cursor-pointer'>
                                <button onClick={onClickMinus}>-</button>				
                                <input readOnly value={state} className='w-[30px] text-center'/>
                                <button onClick={onClickPlus}>+</button>	
                            </div>		
                        </div>
                        <div className='flex items-center gap-[5px] text-brand-color text-[24px] font-bold'>
                            {totalPrice.toLocaleString()}원
                            <span className='text-sm font-normal text-black'>({state})개</span>
                        </div>
                      </div>
                      <div className="prdBuyBtn mt-[30px]">
                        <div className='flex gap-[11px] [&_button]:flex-1 [&_button]:p-[16px_0] [&_button]:text-[#616161] [&_button]:text-[18px] [&_button]:text-center [&_button]:font-medium [&_button]:border [&_button]:border-[#ccc] [&_button]:cursor-pointer'>
                            <button className='!text-white bg-brand-color'>구매하기</button>
                            <button className='hidden lg:block'>선물하기</button>
                            <button onClick={() => onAddCart(product)}>장바구니</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;