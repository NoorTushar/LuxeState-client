import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRentComm = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: rentCommEstates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["rentCommEstates"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/rent-comm`);
         return data;
      },
   });

   return [rentCommEstates, isLoading, refetch];
};

export default useRentComm;
