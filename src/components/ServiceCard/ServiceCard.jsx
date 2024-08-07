import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
   return (
      <li>
         <div className="bg-white p-10 space-y-4 flex flex-col min-h-min h-full shadow-lg rounded-xl">
            <h2 className="text-3xl tracking-[2px] uppercase text-ourCoffee flex-1">
               {service.title}
            </h2>
            <p className="text-neutral-900">{service.description}</p>

            <div className="flex-grow flex items-end justify-center py-2">
               <Link className="py-2.5 px-4 relative group overflow-hidden font-medium  inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourCoffee text-ourLighterYellow uppercase rounded-md">
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-neutral-900 group-hover:h-full opacity-90"></span>
                  <span className="relative tracking-[2px] text-sm">
                     Learn More
                  </span>
               </Link>
            </div>
         </div>
      </li>
   );
};

export default ServiceCard;
