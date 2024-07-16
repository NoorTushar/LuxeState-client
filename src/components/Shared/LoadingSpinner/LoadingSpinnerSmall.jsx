import { Triangle } from "react-loader-spinner";

const LoadingSpinnerSmall = () => {
   return (
      <div className="min-h-[200px] flex items-center justify-center">
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

export default LoadingSpinnerSmall;
