import Title from "../Shared/Title/Title";
import "./RecentSection.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import Swiper autoplay styles if needed

// Import the necessary Swiper modules
import { Pagination, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpinnerSmall from "../Shared/LoadingSpinner/LoadingSpinnerSmall";
import Estate from "../Estate/Estate";
import ShowAllBtn from "../ShowAllBtn/ShowAllBtn";

const RecentSection = () => {
   const axiosPublic = useAxiosPublic();

   const { data: recentStates = [], isLoading } = useQuery({
      queryKey: ["recent"],

      queryFn: async () => {
         const { data } = await axiosPublic("/recent");
         console.log(data);
         return data;
      },
   });

   if (isLoading) {
      return <LoadingSpinnerSmall />;
   }
   console.log(recentStates);

   return (
      <section className="py-[60px] px-6">
         <Title title={"latest listings"} upperTitle={"our recent"} />

         <div className="max-w-[1200px] mx-auto">
            <Swiper
               slidesPerView={3} // Default number of slides per view
               spaceBetween={30} // Space between slides
               pagination={{ clickable: true }} // Enable clickable pagination buttons
               autoplay={{
                  delay: 2000, // 3 seconds delay
                  disableOnInteraction: false, // Continue autoplay after user interactions
               }}
               loop={true}
               modules={[Pagination, Autoplay]} // Include the necessary modules
               className="mySwiper "
               breakpoints={{
                  1024: {
                     slidesPerView: 3, // 3 slides on large screens
                  },
                  640: {
                     slidesPerView: 2, // 1 slide on small screens
                  },
                  0: {
                     slidesPerView: 1, // 1 slide on small screens
                  },
               }}
            >
               {recentStates.map((estate) => (
                  <SwiperSlide key={estate._id}>
                     <div className="pb-10">
                        <Estate {...estate} />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            <ShowAllBtn />
         </div>
      </section>
   );
};

export default RecentSection;
