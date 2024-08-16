import { Link } from "react-router-dom";

const ShowAllBtn = () => {
   return (
      <div className="text-center mt-8">
         <Link
            to={"/all"}
            className="py-2.5 px-4 relative group overflow-hidden font-medium  inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourCoffee text-white uppercase rounded-md"
         >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-neutral-900 group-hover:h-full opacity-90"></span>
            <span className="relative tracking-[2px] text-sm">Show All</span>
         </Link>
      </div>
   );
};

export default ShowAllBtn;
