import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { lineBn1,lineBn2,lineBnMo1,lineBnMo2 } from '../../assets/main';

interface LineBnItem {
    id: number;
    alt:string; 
    link: string;
    pc: string; 
    mo:string;
}

const Line_Bn:LineBnItem[] = [
  { id: 1, alt:"슬라이드 띠배너1", link: "#none", pc: lineBn1, mo: lineBnMo1 },
  { id: 2, alt:"슬라이드 띠배너2", link: "#none", pc: lineBn2, mo: lineBnMo2},
];

const LineBn = () => {
    return (
            <div className="main-box box3 line-bn w-full mt-[70px] lg:mt-[120px] ">
                <Swiper
                    modules={[Autoplay]} 
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    >
                    {Line_Bn.map((item, index) => (
                        <SwiperSlide key={`${item.id}-${index}`} className=''>
                            <a href={item.link}>
                                <img src={item.pc} alt={item.alt} className='hidden lg:block w-full'/>
                                <img src={item.mo} alt={item.alt} className='block lg:hidden w-full'/>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
}

export default LineBn;