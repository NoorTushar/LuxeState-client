import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBuyRes = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: buyResEstates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["buyResEstates"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/buy-res`);
         return data;
      },
   });

   return [buyResEstates, isLoading, refetch];
};

export default useBuyRes;
