import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Title from "../Shared/Title/Title";
import LoadingSpinnerSmall from "../Shared/LoadingSpinner/LoadingSpinnerSmall";
import Estate from "../Estate/Estate";
import ShowAllBtn from "../ShowAllBtn/ShowAllBtn";

const Featured = () => {
   const axiosPublic = useAxiosPublic();
   const { data: featured = [], isLoading } = useQuery({
      queryKey: ["featured"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/featured`);
         return data;
      },
   });
   return (
      <section className="py-[60px]">
         <Title title={"featured"} upperTitle={"our premium"} />

         {/* featured Cards */}
         {isLoading && <LoadingSpinnerSmall />}

         {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 ">
               {featured.length > 0 ? (
                  featured
                     .slice(0, 3)
                     .map((estate) => <Estate key={estate._id} {...estate} />)
               ) : (
                  <div className="text-center">
                     <p className="text-center">
                        No data available with this search result
                     </p>
                  </div>
               )}
            </div>
         )}

         <ShowAllBtn />
      </section>
   );
};

export default Featured;
