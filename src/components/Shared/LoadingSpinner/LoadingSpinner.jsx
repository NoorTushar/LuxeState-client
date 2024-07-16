import { Triangle } from "react-loader-spinner";

const LoadingSpinner = () => {
   return (
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
         <Triangle
            visible={true}
            height="80"
            width="80"
            color="#8E6D45"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
         />
      </div>
   );
};

export default LoadingSpinner;
