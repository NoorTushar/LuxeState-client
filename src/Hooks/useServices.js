import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useServices = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: services = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["services"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/services`);
         return data;
      },
   });

   return [services, isLoading, refetch];
};

export default useServices;
