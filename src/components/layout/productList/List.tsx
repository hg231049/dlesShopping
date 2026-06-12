import Product from "../../product/Product";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../../../App'

const List = () => {
  const { apiItems,addToCart } = useContext(ShopContext);

  // 🌟 1. 주소창의 /list/뒤에 붙은 단어(beauty, fragrances 등)를 싹 잡아옵니다!
  const { path } = useParams<{ path: string }>();

  // 🌟 2. 전체 100개 데이터 중, 현재 주소창에 적힌 카테고리와 일치하는 상품만 필터링!
  const filteredItems = apiItems.filter(item => item.summary === path);

  // 🌟 3. [버그 수정] 전체 개수가 아니라, "실제 필터링된 상품 개수"를 세어줍니다!
  const prdTotal = filteredItems.length;

  // 🌟 4. DummyJSON 카테고리에 맞춰 한글 타이틀 변환 지도 업데이트 🗺️
  const categoryNames: Record<string, string> = {
    beauty: '이벤트',
    fragrances: 'NEW',
    furniture: '전체 상품',
    groceries: '단독 세트',
  };

  // 현재 카테고리의 한글 이름을 찾고, 없으면 주소창 단어 그대로 보여주는 방어막 코드
  const currentTitle = categoryNames[path || ''] || path;

  return (
    <div className="pb-[120px]">
      <div className="inner">
        {/* 한글로 변환된 이쁜 카테고리 타이틀 출력 쨘! */}
        <div className="titleArea p-[20px_0_40px] lg:p-[40px_0_80px] text-center ">
          <h1 className="text-[24px] lg:text-[36px] font-bold uppercase tracking-wide">
            {currentTitle}
          </h1>
        </div>
        
        {/* 진짜 필터링된 개수가 정확하게 연동됩니다. */}
        <div className="flex pb-2">
          <p className="text-sm text-gray-500 font-medium">{prdTotal}개의 상품이 있습니다.</p>
        </div>
        
        {/* 질문자님의 만능 그릇 Product에 필터링된 데이터 쏙 던지기 */}
        <Product 
          items={filteredItems} 
          type="list" 
          className="gap-y-20" 
          onAddCart={addToCart}
        />
      </div>
    </div>
  )
}

export default List;