import Product from "../../components/product/Product";
import React, { useState,useContext } from "react";
import { ShopContext } from '../../context/ShopContext'
import { ProductItem } from '../product/ProductData'; 

interface CartProps {
  type:string;
}

// 가격을 숫자로 바꾸는 함수
const getPriceNumber = (price:string | number) => {
  return typeof price === "number"
    ? price
    : Number(String(price).replace(/[^0-9]/g, ""));
};

const Cart = ({ type }:CartProps) => {
  const { cart,counts,onDeleteCart,onClickPlus,onClickMinus } = useContext(ShopContext);

    // reduce는 배열을 돌면서 값을 하나로 합치는 함수
    // 장바구니 상품들의 가격 × 수량을 전부 더해서
    // 총 주문 금액 하나를 만들기 위해서
  const totalCartPrice = cart.reduce((sum, item) => {
    const count = counts[item.id] || 1;
    const price = getPriceNumber(item.salePrice);

    return sum + price * count;
  }, 0);

  return (
    <div className="rowGrid pb-[120px]">
      <div className="inner">
        <div className="titleArea p-[20px_0_40px] lg:p-[40px_0_80px] text-center">
          <h1 className="text-[24px] lg:text-[36px] font-bold">장바구니</h1>
        </div>

        {cart.length === 0 ? (
          <p className="py-20 text-gray-400 text-center">
            장바구니가 비었습니다.
          </p>
        ) : (
          <>
            <Product
              type={type}
              items={cart}
              counts={counts}
              onClickPlus={onClickPlus}
              onClickMinus={onClickMinus}
              onDeleteCart={onDeleteCart}
              className=""
            />
            <div className="totalPrice flex flex-col gap-3 mt-10 pt-10 text-3xl font-bold text-center border-t">
              {totalCartPrice.toLocaleString()}원
              <span className="text-gray-500 text-xl font-normal">
                총 주문 금액
              </span>
            </div>
          </>
        )}


      </div>
    </div>
  );
};

export default Cart;