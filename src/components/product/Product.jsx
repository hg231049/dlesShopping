
import ProductCard from './ProductCard';
import ProductHorizontal from './ProductHorizontal';
import { Link } from 'react-router-dom';

const Product = ({ items, limit, type,onAddCart }) => {

    const isHorizontal = type === 'new' || type === 'row' ;
    // 타입에 따라 그리드/플렉스 레이아웃 결정
    const containerClass = 
        isHorizontal ? "flex flex-col gap-0 " :// New는 세로로 쌓기
        type === 'best' ? "grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4":
        "grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-20";// 기본은 격자형

    // 데이터가 넘어오지 않았을 경우를 대비해 기본값 빈 배열 설정
    const displayList = items || [];

    return (
        <div className={`prd-list ${containerClass}`}>
            {[...displayList].slice(0, limit).map((item, index) => (
                <div className='prd-item [.rowGrid_&]:mb-[10px] [.rowGrid_&]:pb-[10px] [.rowGrid_&]:border-b [.rowGrid_&]:border-[rgba(192,192,192,0.2)] [.rowGrid_&]:last:border-0' key={`${item.id}-${index}`}>
                    <Link to={`/detail/${item.id}`}>
                        {isHorizontal  ? (
                            <ProductHorizontal item={item} index={index} onAddCart={onAddCart}/>
                        ) : (
                            <ProductCard item={item} index={index} showIndex={type === 'best'} onAddCart={onAddCart}/>
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Product;