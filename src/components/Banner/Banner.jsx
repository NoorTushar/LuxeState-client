import { useRef } from "react";
import bg1 from "../../assets/banner/luxestate-bg-1.jpg";
import bg2 from "../../assets/banner/luxestate-bg-5.jpg";
import bg3 from "../../assets/banner/luxestate-bg-3.jpg";
import bg4 from "../../assets/banner/luxestate-bg-4.jpg";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Slide from "./Slide";

const Banner = () => {
   const swiperRef = useRef(null);

   return (
      <section id="banner">
         <Swiper
            onSwiper={(swiper) => {
               swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            effect={"fade"}
            loop={true}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Slide bgImg={bg1} swiperRef={swiperRef}></Slide>
            </SwiperSlide>

            <SwiperSlide>
               <Slide bgImg={bg2} swiperRef={swiperRef}></Slide>
            </SwiperSlide>

            <SwiperSlide>
               <Slide bgImg={bg3} swiperRef={swiperRef}></Slide>
            </SwiperSlide>

            <SwiperSlide>
               <Slide bgImg={bg4} swiperRef={swiperRef}></Slide>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Banner;
