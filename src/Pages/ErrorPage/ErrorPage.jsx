import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();

   return (
      <div className="min-h-screen flex items-center justify-center flex-col bg-ourBlack">
         <Link
            to={"/"}
            className="py-1.5 px-4 relative group overflow-hidden font-medium bg-transparent inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase mb-6"
         >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
            <span className="relative tracking-[2px] text-sm">Back Home</span>
         </Link>
         <div className="text-center">
            <p className="text-2xl font-bold">{error.status}</p>
            <p className="text-2xl font-bold">
               Page {error.statusText || error.message}
            </p>
            <p className="text-2xl font-bold">{error.data}</p>
         </div>
         <img
            className="w-full max-w-[400px]"
            src="../../public/error-message.png"
            alt=""
         />
      </div>
   );
};

export default ErrorPage;
