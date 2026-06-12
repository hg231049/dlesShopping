import { useParams } from 'react-router-dom';
import { useReducer,useContext } from 'react';
import { ShopContext } from '../../../App'
import PrdOption from './PrdOption';
import PrdInfo from './PrdInfo';
import PrdThumb from './PrdThumb';
import TotalPrice from './TotalPrice';
import BuyBtn from './BuyBtn';


interface ActionType {
    type:'INCREASE'|'DECREASE';
    data:number;
}

function reducer(state:number,action:ActionType){
    switch(action.type){
        case 'INCREASE' : return state + action.data;
        case 'DECREASE' : return state - action.data > 0 ? state - action.data : 1;
        default:return state;
    }

}
function calcDiscount(salePrice:number, orgPrice:number) {
    if (!salePrice || !orgPrice || orgPrice <= salePrice) return 0;
    return Math.round((orgPrice - salePrice) / orgPrice * 100);
  }

const ProductDetail = () => {
    const { apiItems } = useContext(ShopContext);
    // 총 상품 가격 및 개수
    const [state,dispatch] = useReducer(reducer,1);
    // useParams : 현재 브라우저 주소창(URL)에 적힌 파라미터(변수) 값을 쏙 빼서 쓸 수 있게 해주는 도구
    const { id } = useParams(); // 주소창의 :id 값을 가져옵니다 (문자열)

    // 1. prdData에서 주소창의 id와 일치하는 상품 하나를 찾습니다.
    // id는 숫자고 useParams로 가져온 건 문자열이라 Number()로 맞춰줍니다.
    const product = apiItems.find(item => item.id === Number(id));

    // 만약 상품이 없다면 예외 처리
    if (!product) {
        return <div className="py-20 text-center">상품을 찾을 수 없습니다.</div>;
    }


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
    const getPriceNumber = (price:number | string) => {
        return typeof price === "number" ? price : Number(String(price).replace(/[^0-9]/g, ''));
    }
    const numTotalPrice = getPriceNumber(product.salePrice);
    const totalPrice = numTotalPrice * state;
    //console.log(numTotalPrice.toLocaleString());

     const formatPrice = (price:number | string) => {
        const numbericPrice =  getPriceNumber(price);
        return `${numbericPrice.toLocaleString()}원`
    };

    // 할인율
    const displayPercent = calcDiscount(product.salePrice, product.orgPrice);
    const formatedPrice = (price:number):string => {
        return typeof price === 'number' ? `${price.toLocaleString()}원` : price;
    };



    return (
        <div className='prdDetail'>
            <div className="inner">
                <div className="flex flex-col gap-5 p-[0_0_100px] lg:gap-25 lg:p-[40px_0_100px] lg:flex-row">
                    <PrdThumb product={product}/>

                    <div className="prdInfo w-full">
                        <PrdInfo product={product} displayPercent={displayPercent} formatPrice={formatPrice}/>
                        <PrdOption product={product}/>
                        <TotalPrice totalPrice={totalPrice} state={state} onClickPlus={onClickPlus} onClickMinus={onClickMinus}/>
                        <BuyBtn product={product}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;