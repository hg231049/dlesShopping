import Visual from './Visual';
import QuickMenu from './QuickMenu';
import Best from './Best';
import LineBn from './LineBn';
import New from './New';

const Home = () => {

    return (
        <div className="main-wrap">
            <Visual/>
            <QuickMenu/>
            <Best type="best"/>
            <LineBn/>
            <New type="new"/>
        </div>
    )
}

export default Home;