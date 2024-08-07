import PropTypes from "prop-types";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const Slide = ({ bgImg, swiperRef }) => {
   return (
      <div
         className="hero min-h-[calc(100vh)] bg-cover bg-no-repeat"
         style={{
            backgroundImage: `url(${bgImg})`,
         }}
      >
         <div className="hero-overlay bg-opacity-40"></div>
         <div className="hero-content text-start mt-[68px]">
            <div className="max-w-3xl">
               <h4 className="text-white text-xl mb-2 tracking-[5px] uppercase font-medium">
                  WELCOME TO SUFIZA PROPERTY
               </h4>

               <h4 className="text-white text-xl mt-2 tracking-[5px] uppercase font-medium">
                  YOUR MOST TRUSTED
               </h4>
               <h1 className="mb-5 text-[46px] lg:text-[86px] text-white font-semibold  tracking-[3px] md:leading-[60px] uppercase break-words">
                  real estate
                  <br /> <span className="text-stroke">agency</span>
               </h1>

               <div className="flex justify-start"></div>
               <div className="custom-navigation space-x-4 mt-3 md:mt-6">
                  <button
                     onClick={() => swiperRef.current?.slidePrev()}
                     className="p-2 relative group overflow-hidden font-medium bg-transparent text-ourPrimary inline-block custom-next border-ourPrimary border hover:border-white"
                  >
                     <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                     <span className="relative group-hover:text-ourPrimary">
                        <GrFormPreviousLink className="text-2xl" />
                     </span>
                  </button>
                  <button
                     onClick={() => swiperRef.current?.slideNext()}
                     className="p-2 relative group overflow-hidden font-medium bg-transparent text-ourPrimary inline-block custom-next border-ourPrimary border hover:border-white"
                  >
                     <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                     <span className="relative group-hover:text-ourPrimary">
                        <GrFormNextLink className="text-2xl" />
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

Slide.propTypes = {
   bgImg: PropTypes.string.isRequired,
   swiperRef: PropTypes.object.isRequired,
};

export default Slide;
