// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import adidas from "../../assets/brand-logos/adidas.png";
import chanel from "../../assets/brand-logos/chanel.png";
import dell from "../../assets/brand-logos/dell.png";
import engagement from "../../assets/brand-logos/engagement.png";
import isuzu from "../../assets/brand-logos/isuzu.png";
import kia from "../../assets/brand-logos/kia.png";
import philips from "../../assets/brand-logos/philips.png";
import puma from "../../assets/brand-logos/puma.png";
import vivo from "../../assets/brand-logos/vivo.png";
import wo from "../../assets/brand-logos/wo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Testimonials() {
   return (
      <section className="bg-slate-200">
         <Swiper
            slidesPerView={2}
            spaceBetween={2}
            loop={true}
            // autoplay={{
            //    delay: 2000,
            //    disableOnInteraction: false,
            // }}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 5,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
               },
            }}
            modules={[Autoplay]}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={adidas} alt="" />
               </div>
            </SwiperSlide>

            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={chanel} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={dell} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img
                     className="w-full max-w-[100px]"
                     src={engagement}
                     alt=""
                  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={isuzu} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={kia} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={philips} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={puma} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={vivo} alt="" />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className=" bg-red-500 items-center justify-center flex">
                  <img className="w-full max-w-[100px]" src={wo} alt="" />
               </div>
            </SwiperSlide>
         </Swiper>
      </section>
   );
}
