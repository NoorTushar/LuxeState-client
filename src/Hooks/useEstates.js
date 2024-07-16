import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEstates = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: estates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["estates"],
      queryFn: async () => {
         const { data } = await axiosPublic(`http://localhost:3000/estates`);
         return data;
      },
   });

   return [estates, isLoading, refetch];
};

export default useEstates;
