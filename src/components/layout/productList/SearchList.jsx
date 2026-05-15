import Product from "../../product/Product";
import { IconSearch} from '../../icon/Icon'

const SearchList = ({onAddCart,search,onChangeSearch,prdData}) => {
    
    const getFilteredSearch = () => {
        if(search === ""){
            return prdData
        }
       return prdData.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredData = getFilteredSearch();

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