import Product from "../../product/Product";
import { IconSearch} from '../../icon/Icon'
import {ProductItem} from '../../product/ProductData'
import React from "react";

interface ProductSearchListProps {
    prdData:ProductItem[];
    search:string;
    onAddCart?:(data:ProductItem) => void;//이 함수를 실행할 때는 반드시 상품 데이터 1개(data)를 재료로 넣어줘야함
    // 🌟 1. input 창의 변경 이벤트를 감지하는 정석적인 함수 타입을 정의합니다.
    //  React.ChangeEvent: 리액트에서 "값이 변하는 이벤트(입력, 체크 등)"
    // HTMLInputElement: input에서 일어난 변화라는걸 알려줌
    onChangeSearch?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchList = ({onAddCart,search,onChangeSearch,prdData}:ProductSearchListProps) => {
    
    const getFilteredSearch = () => {
        if(search === ""){
            return prdData
        }
       return prdData.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredData = getFilteredSearch();

    // 상품 갯수
    const searchPrdTotal = filteredData.length;

    return (
        <div className="pb-[120px]">
            <div className="inner">
                <div className="titleArea p-[20px_0_40px] lg:p-[40px_0_80px] text-center ">
                    <h1 className="text-[24px] lg:text-[36px] font-bold">검색결과</h1>
                    <div className="quick-search relative max-w-[860px] w-full mx-auto mt-6">
                        <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어를 입력해 주세요' className='w-full h-[50px] border-b boder-black text-md'/>
                        <button className='absolute top-1/2 right-0 -translate-y-1/2'><IconSearch/></button>
                    </div>
                </div>
                <div className="flex pb-2">
                    <p>{searchPrdTotal}개의 상품</p>
                </div>
                {filteredData.length > 0 ? (
                    <Product items={filteredData} type="list" onAddCart={onAddCart} />
                ) : (
                    <p className="py-20 text-gray-400 text-center">{search}에 대한 검색 결과가 없습니다.</p>
                )
                }
            </div>
        </div>
    )
}

export default SearchList;