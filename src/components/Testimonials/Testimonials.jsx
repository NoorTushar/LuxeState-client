// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Testimonials() {
   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
               },
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
         </Swiper>
      </>
   );
}
