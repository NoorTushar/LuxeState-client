import { useEffect, useState } from "react";
import countries from "../../assets/divisions.json";

import "./SearchSection.css";

import LoadingSpinnerSmall from "../Shared/LoadingSpinner/LoadingSpinnerSmall";
import Estate from "../Estate/Estate";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SearchSection = () => {
   const [selectedCountry, setSelectedCountry] = useState("");
   const [divisions, setDivisions] = useState(null);
   const [propertySize, setPropertySize] = useState(8000);

   const axiosPublic = useAxiosPublic();

   const {
      data: estates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["estates", selectedCountry, propertySize],
      queryFn: async () => {
         const { data } = await axiosPublic(
            `http://localhost:3000/estates?country=${selectedCountry}&&size=${propertySize}`
         );
         return data;
      },
   });

   const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
      refetch();
   };

   useEffect(() => {
      const divisions = countries.find(
         (country) => country.countryName === selectedCountry
      );
      setDivisions(divisions?.divisions);
   }, [selectedCountry]);

   const handlePropertySizeChange = (e) => {
      setPropertySize(e.target.value);
   };

   return (
      <section className="py-[100px]">
         {/* Search Form */}
         <form className="max-w-lg mx-auto search-form grid grid-cols-3">
            {/* Search by Type */}
            {/* Search by Country */}
            <div className="inputBox">
               <label className="" htmlFor="">
                  Search by Country:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4 text-white"
                  onChange={handleCountryChange}
                  name="country"
                  id=""
               >
                  <option value=""></option>
                  {countries.map((country) => (
                     <option
                        key={country.countryName}
                        value={country.countryName}
                     >
                        {country.countryName}
                     </option>
                  ))}
               </select>
            </div>

            {/* Property Size Range */}
            <div className="inputBox">
               <label htmlFor="">Property Range (sq.ft):</label>
               <div className="relative py-2">
                  <input
                     className="property-range "
                     type="range"
                     min="1200"
                     max="8000"
                     step="100"
                     defaultValue="8000"
                     name=""
                     id=""
                     onChange={handlePropertySizeChange}
                  />
                  <span className="absolute left-0 -top-3">1200</span>
                  <span className="absolute right-0 -top-3">8000</span>
               </div>
               <p>Showing results for {propertySize} sq.ft and below</p>
            </div>
         </form>
         {/* Show Selected Country's Division */}
         {divisions && (
            <div className="flex gap-2 flex-wrap p-4">
               {divisions?.map((division) => (
                  <span
                     className="bg-transparent text-ourPrimary border border-ourPrimary py-1 px-2 text-sm"
                     key={division}
                  >
                     {division}
                  </span>
               ))}
            </div>
         )}

         {/* Estates Cards */}
         {isLoading && <LoadingSpinnerSmall />}

         {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
               {estates.length > 0 ? (
                  estates.map((estate) => (
                     <Estate key={estate._id} {...estate} />
                  ))
               ) : (
                  <div className="text-center">
                     <p className="text-center">
                        No data available with this search result
                     </p>
                  </div>
               )}
            </div>
         )}
      </section>
   );
};

export default SearchSection;
