import { useRef } from "react";
import bg1 from "../../assets/banner/banner-1-bd-estate.jpg";
import bg2 from "../../assets/banner/banner-2-bd-estate.jpg";
import bg3 from "../../assets/banner/banner-3-bd-estate.jpeg";
import bg4 from "../../assets/banner/banner-4-bd-estate.jpg";
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
