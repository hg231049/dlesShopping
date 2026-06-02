import {ProductItem} from '../../product/ProductData';
interface PrdThumbProps {
    product:ProductItem;
}
const PrdThumb = ({product}:PrdThumbProps) => {
    return (
        <>
            <div className="detailThumb max-w-[700px] w-full">
                <img src={product.thumb} alt={product.name} className='w-full'/>
            </div>
        </>
    )
}

export default PrdThumb;