import useBuyComm from "../../Hooks/useBuyComm";
import useBuyRes from "../../Hooks/useBuyRes";
import Estate from "../../components/Estate/Estate";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Title from "../../components/Shared/Title/Title";

const BuyResidential = () => {
   const [buyCommEstates, isLoading] = useBuyRes();

   if (isLoading) {
      return <LoadingSpinner />;
   }
   return (
      <main className="pb-[70px] pt-[100px] min-h-[calc(100vh)">
         <Title title={"buy - residential"} />

         {/* cards */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 max-w-[1280px] mx-auto">
            {buyCommEstates.map((estate) => (
               <Estate key={estate._id} {...estate} />
            ))}
         </div>
      </main>
   );
};

export default BuyResidential;
