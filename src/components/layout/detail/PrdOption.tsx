import { useState } from 'react';
const PrdOption = ({product}) => {
    // 옵션 선택
    const [option,setOption] = useState<string>("");
    return (
        <>
            {/* 옵션 */}
            {product.option && product.option.length > 0 && (
                    <div className="option-wrap my-6">
                        {product.option?.map((opt: OptionItem, idx: number) => (
                        <div key={idx} className="flex flex-col gap-1.5">
                            <p className='mb-2'>{opt.title}</p>
                            <select 
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                                name="prd-option" 
                                id="prd-option" 
                                className="w-full p-3 border border-[#ccc] rounded-[5px] text-md font-medium cursor-pointer focus:outline-none"
                            >
                                {/* 힌트가 될 기본 안내 문구를 첫 칸에 배치합니다. */}
                                <option value="">-- {opt.title || "옵션"} 선택 --</option>
                                {opt.text?.map((txt:string,idx:number)=>(
                                    <option key={idx} value={txt}>{txt}</option>
                                ))}
                            </select>
                        </div>
                            ))}
                    </div>
                )}
        </>
    )
}

export default PrdOption;