import Visual from './Visual';
import QuickMenu from './QuickMenu';
import Best from './Best';
import LineBn from './LineBn';
import New from './New';
import {ProductItem} from './ProductData';

interface HomeProps {
    prdData:ProductItem[];
    onAddCart?:(data:ProductItem) => void;
}

const Home = ({onAddCart,prdData}:HomeProps) => {
    
    return (
        <div className="main-wrap">
            <Visual/>
            <QuickMenu/>
            <Best prdData={prdData} type="best" onAddCart={onAddCart}/>
            <LineBn/>
            <New  prdData={prdData} type="new" onAddCart={onAddCart}/>
        </div>
    )
}

export default Home;