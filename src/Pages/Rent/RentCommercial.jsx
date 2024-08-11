import useRentComm from "../../Hooks/useRentComm";
import Estate from "../../components/Estate/Estate";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Title from "../../components/Shared/Title/Title";

const RentCommercial = () => {
   const [rentCommEstates, isLoading] = useRentComm();

   if (isLoading) {
      return <LoadingSpinner />;
   }
   return (
      <main className="pb-[70px] pt-[100px] min-h-[calc(100vh)">
         <Title title={"rent - commercial"} />

         {/* cards */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 max-w-[1280px] mx-auto">
            {rentCommEstates.map((estate) => (
               <Estate key={estate._id} {...estate} />
            ))}
         </div>
      </main>
   );
};

export default RentCommercial;
