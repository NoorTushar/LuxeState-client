import Title from "../Shared/Title/Title";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper autoplay styles if needed

// Import the necessary Swiper modules
import { Pagination, Autoplay } from "swiper/modules";
import ClientIframe from "./ClientIframe/ClientIframe";

import "./ClientsVideoSection.css";

// Video Links:
const videoLinks = [
   {
      id: 1,
      link: "https://www.youtube.com/embed/JLjvEYMBGzQ?si=3rgftDI2bzk85exa",
   },
   {
      id: 2,
      link: "https://www.youtube.com/embed/_e_hEWZP8mU?si=F007zh4I8DMYMmfx",
   },
   {
      id: 3,
      link: "https://www.youtube.com/embed/JLjvEYMBGzQ?si=3rgftDI2bzk85exa",
   },
   {
      id: 4,
      link: "https://www.youtube.com/embed/_e_hEWZP8mU?si=F007zh4I8DMYMmfx",
   },
];

const ClientsVideoSection = () => {
   return (
      <section className="py-[60px] px-6">
         <Title title={"Customer's Words"} upperTitle={"Sufiza in"} />

         <div className="max-w-[1200px] mx-auto">
            <Swiper
               slidesPerView={3} // Default number of slides per view
               spaceBetween={30} // Space between slides
               pagination={{ clickable: true }} // Enable clickable pagination buttons
               loop={true}
               modules={[Pagination, Autoplay]} // Include the necessary modules
               className="mySwiper clientsSwiper"
               breakpoints={{
                  1024: {
                     slidesPerView: 3, // 3 slides on large screens
                  },
                  640: {
                     slidesPerView: 1, // 1 slide on small screens
                  },
                  0: {
                     slidesPerView: 1, // 1 slide on small screens
                  },
               }}
            >
               {videoLinks.map((link) => (
                  <SwiperSlide key={link.id}>
                     <ClientIframe link={link} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default ClientsVideoSection;
