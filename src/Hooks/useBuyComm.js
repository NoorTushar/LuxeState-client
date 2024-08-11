import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBuyComm = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: buyCommEstates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["buyCommEstates"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/buy-comm`);
         return data;
      },
   });

   return [buyCommEstates, isLoading, refetch];
};

export default useBuyComm;
