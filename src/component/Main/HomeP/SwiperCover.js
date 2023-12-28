import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function SwiperCover() {
  return (
    <div className="slideSect">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={3000}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
      >
        <SwiperSlide>
          <div className="slide1"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
