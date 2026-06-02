interface TotalPriceProps {
    state:number;
    onClickMinus:() => void;
    onClickPlus:() => void;
    totalPrice:number;
}

const TotalPrice = ({state,onClickMinus,onClickPlus,totalPrice}:TotalPriceProps) => {
    return (
        <>
            <div className="totalPrice flex justify-between items-center mt-[30px] pt-[10px] border-t border-[#D3D3D3]">
                <div className="flex items-center gap-5">			
                    <p className='font-bold text-md'>총 구매 금액</p>	
                    <div className='h-[28px] px-3 leading-[28px] border border-[#d3d3d3] rounded-[5px] [&_button]:text-[#d3d3d3] [&_button]:cursor-pointer'>
                        <button onClick={onClickMinus}>-</button>				
                        <input readOnly value={state} className='w-[30px] text-center'/>
                        <button onClick={onClickPlus}>+</button>	
                    </div>		
                </div>
                <div className='flex items-center gap-[5px] text-brand-color text-[24px] font-bold'>
                    {totalPrice.toLocaleString()}원
                    <span className='text-sm font-normal text-black'>({state})개</span>
                </div>
            </div>
        </>
    )
}

export default TotalPrice;