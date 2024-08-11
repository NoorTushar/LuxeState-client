import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRentRes = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: rentResEstates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["rentResEstates"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/rent-res`);
         return data;
      },
   });

   return [rentResEstates, isLoading, refetch];
};

export default useRentRes;
