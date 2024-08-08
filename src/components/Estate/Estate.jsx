/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";

const Estate = ({
   image,
   description,
   facilities,
   status,
   price,
   area,
   category,
   estate_title,
   location,
}) => {
   return (
      <div className=" h-full bg-white rounded-xl shadow-xl overflow-hidden">
         <div className="relative overflow-hidden">
            <img
               src={image}
               alt=""
               className="object-cover object-center w-full h-72 hover:scale-110 duration-300 "
            />

            <span className="absolute font-light tracking-[1px] px-4 py-2  bg-ourCoffee top-0 -right-1 uppercase text-sm text-white">
               {status}
            </span>
            <span className="absolute font-light tracking-[1px] px-4 py-2  bg-ourCoffee bottom-0 left-0 uppercase text-sm text-white">
               {category}
            </span>
            <span className="absolute font-light tracking-[1px] px-4 py-2 bg-ourCoffee bottom-0 right-0 text-sm text-white">
               {status === "rent" && `$${price}/month`}
               {status === "buy" && `$${price}`}
            </span>
         </div>
         <div className="flex flex-col  p-6 space-y-8 ">
            <div className="space-y-2">
               <h2 className="text-lg   tracking-[2px] uppercase">
                  {estate_title}
               </h2>
               <p className="flex items-center gap-2">
                  <FaLocationDot className="text-ourPrimary text-lg"></FaLocationDot>{" "}
                  {location?.division}, {location?.country}
               </p>
               <p className="flex items-center gap-2">
                  <FaHome className="text-ourPrimary text-lg"></FaHome> {area}{" "}
                  sq.ft
               </p>

               {/* {description.length > 140 ? (
                  <p>{description.slice(0, 140)} ...</p>
               ) : (
                  <p>{description}</p>
               )} */}

               {/* <ul className="">
                  Facilities:
                  {facilities.map((facility, index) => {
                     return (
                        <li key={index} className="flex items-center gap-2">
                           <MdDone className="text-ourPrimary"></MdDone>{" "}
                           {facility}
                        </li>
                     );
                  })}
               </ul> */}
            </div>
            <div className="flex-grow flex items-end justify-center py-2">
               <Link className="py-2.5 px-4 relative group overflow-hidden font-medium  inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourCoffee text-white uppercase rounded-md">
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-neutral-900 group-hover:h-full opacity-90"></span>
                  <span className="relative tracking-[2px] text-sm">
                     Learn More
                  </span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Estate;
