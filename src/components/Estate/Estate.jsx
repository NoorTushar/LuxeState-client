/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const Estate = ({
   id,
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
      <div className=" h-full bg-[#252525] ">
         <div className="relative overflow-hidden">
            <img
               src={image}
               alt=""
               className="object-cover object-center w-full h-72 hover:scale-110 duration-300"
            />

            <span className="absolute font-light tracking-[1px] px-4 py-2  bg-black top-0 -right-1 uppercase">
               {status}
            </span>
            <span className="absolute font-light tracking-[1px] px-4 py-2  bg-black bottom-0 left-0 uppercase">
               {category}
            </span>
            <span className="absolute font-light tracking-[1px] px-4 py-2 bg-black bottom-0 right-0 ">
               {status === "rent" && `$${price}/month`}
               {status === "buy" && `$${price}`}
            </span>
         </div>
         <div className="flex flex-col  p-6 space-y-8 ">
            <div className="space-y-2">
               <h2 className="text-lg font-light tracking-[2px]">
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

               {description.length > 140 ? (
                  <p>{description.slice(0, 140)} ...</p>
               ) : (
                  <p>{description}</p>
               )}

               <ul className="font-didact ">
                  Facilities:
                  {facilities.map((facility, index) => {
                     return (
                        <li
                           key={index}
                           className="font-didact flex items-center gap-2"
                        >
                           <MdDone className="text-ourPrimary"></MdDone>{" "}
                           {facility}
                        </li>
                     );
                  })}
               </ul>
            </div>
            <div>
               <Link
                  to={"/login"}
                  className="py-1.5 px-4 relative group overflow-hidden font-medium  inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase"
               >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                  <span className="relative tracking-[2px] text-sm">
                     Details
                  </span>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Estate;
