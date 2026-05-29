import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import { mainVisual1,mainVisual2,mainVisual3,mainVisual4,mainVisual5 } from '../../assets/main';

interface VisualItem {
    id: number;
    alt:string;
    link: string;
    src:string;
    desc?:string;
    subDesc?:string;
}

const Main_visual:VisualItem[] = [
  { id: 1, alt:"메인 비주얼1", link: "#none", src:mainVisual1, desc:"하루의 발 피로를 풀어주는 \n발편한케어 V2", subDesc:"더 강력해진 케어로 돌아온 V2" },
  { id: 2, alt:"메인 비주얼2", link: "#none", src:mainVisual2, desc:"4세대 마사지 경추베개의 탄생 \n목 마사지 베개 V2", subDesc:"에어백 · 진동 · 온열 올인원 케어"},
  { id: 3, alt:"메인 비주얼3", link: "#none", src:mainVisual3 , desc:"정형외과 전문의 공동 개발 \n병원의 케어를 일상으로", subDesc:"인체구조를 고려한 회복중심의 설계"},
  { id: 4, alt:"메인 비주얼4", link: "#none", src:mainVisual4, desc:"허리를 위한 집중 설계 \n허리편한케어 V2", subDesc:"전문가의 손길을 담은 허리케어 솔루션"},
  { id: 5, alt:"메인 비주얼5", link: "#none", src:mainVisual5 },
];

const Visual = () => {
    return (
            <div className="main-visual overflow-hidden w-full">
                <Swiper
                    modules={[Autoplay]} 
                    centeredSlides={true}
                    slidesPerView={1.25}
                    spaceBetween={0}
                    loop={true} 
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{            
                        1024: {                
                        slidesPerView: 4.5,     
                        spaceBetween: 0,  
                        },
                    }}
                    className="main-swiper [&_.swiper-wrapper]:items-start" // 클래스명을 주면 스타일 잡기 편해요
                    >
                    {[...Main_visual, ...Main_visual].map((item, index) => (
                        <SwiperSlide key={`${item.id}-${index}`} className='relative transition-transform lg:origin-top ease-in-out duration-500 scale-92 [&.swiper-slide-active]:scale-100'>
                            <a href={item.link}>
                                <span><img src={item.src} alt={item.alt} className='rounded-[10px] w-full overflow-hidden '/></span>
                                <div className="main-visual-tit absolute left-[24px] bottom-[34px] lg:bottom-[62px] text-white ">
                                    <h2 className='whitespace-pre-wrap text-[21px] lg:text-[30px] font-bold tracking-[-0.528px] leading-[138%]'>{item.desc}</h2>
                                    <p className='mt-[12px] lg:mt-[24px] text-[14px] lg:text-[18px] font-normal tracking-[-0.317px]'>{item.subDesc}</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        );
}

export default Visual;