import MenuHeader from "./MenuHeader";
import MenuQuick from "./MenuQuick";
import SlideCate from "./SlideCate";
import MenuFooter from "./MenuFooter";

const SlideMenu = ({onClickMenuBar,menuOpen,cartCount,search,onChangeSearch}) => {
    
    return (
        <div className={`slideMenu scroll fixed top-0 w-full h-full z-50 bg-white shadow-2xl transition-all duration-300 ease-in-out overflow-y-scroll lg:hidden ${menuOpen ? "left-0" : "left-[-100%]"}`} >
            <MenuHeader onClickMenuBar={onClickMenuBar}/>
            <MenuQuick cartCount={cartCount} search={search} onChangeSearch={onChangeSearch} onClickMenuBar={onClickMenuBar}/>
            <SlideCate/>
            <MenuFooter/>
        </div>
    )
}

export default SlideMenu;