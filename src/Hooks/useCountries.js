import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCountries = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: countries = {},
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["countries"],
      queryFn: async () => {
         const { data } = await axiosPublic(`/countries`);
         return data;
      },
   });

   return [countries, isLoading, refetch];
};

export default useCountries;
