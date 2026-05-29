import { joinBn } from '../../../assets/main/index'
const MenuFooter = () => {
    return (
        <div className='px-5 pb-10'>
            <div className="flex flex-col gap-3  py-[30px]">
                    <h3 className=" text-lg font-bold">고객서비스</h3>
                    <div className="cs-hours text-sm">
                        운영시간: 월~목 <strong>09:30 - 17:00</strong> | 금 <strong>09:30 - 16:00</strong> <br />
                        점심시간: <strong>12:30 - 13:30
                    </strong>  <br />
                    <span className="cs-note">*토,일 공휴일 휴무</span>
                    </div>
            </div> 
            <div>
                <img src={joinBn} alt="" />
            </div>
       </div>
    )
}

export default MenuFooter;