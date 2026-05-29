import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'; 


const TopBn = () => {
    return (
            <div className="top-bn overflow-hidden bg-brand-color text-white">
                <Swiper
                    effect={'fade'}
                    // 사용할 기능을 modules 배열에 모두 적어줘야 합니다.
                    modules={[EffectFade, Autoplay]} 
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="h-[45px] w-full [&_span]:flex [&__span]:items-center [&_span]:justify-center [&_span]:h-full"
                >
                    <SwiperSlide className="bg-brand-color">
                        <span>✨ 신규 회원 10% 할인 쿠폰</span>
                    </SwiperSlide>
                    <SwiperSlide className="bg-sub-color">
                        <span>🚚 5만원 이상 무료 배송</span>
                    </SwiperSlide>
                    <SwiperSlide className="bg-point-color">
                        <span>📣 공식 홈페이지 오픈 이벤트</span>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
}

export default TopBn;