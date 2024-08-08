import { useEffect, useState } from "react";

import { purposes } from "../../assets/data";

import "./SearchSection.css";

import LoadingSpinnerSmall from "../Shared/LoadingSpinner/LoadingSpinnerSmall";
import Estate from "../Estate/Estate";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Title from "../Shared/Title/Title";
import useCountries from "../../Hooks/useCountries";

const SearchSection = () => {
   const [propertySize, setPropertySize] = useState(8000);
   const [selectedPurpose, setSelectedPurpose] = useState("");
   const [selectedCountry, setSelectedCountry] = useState("");
   const [selectedPrice, setSelectedPrice] = useState();
   const [selectedPropertyType, setSelectedPropertyType] = useState("");
   const [selectedBedrooms, setSelectedBedrooms] = useState("");

   const axiosPublic = useAxiosPublic();
   const [countries] = useCountries();
   console.log(countries);
   const {
      data: estates = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["estates", propertySize, selectedPurpose, selectedCountry],

      queryFn: async () => {
         const { data } = await axiosPublic(
            `/estates?size=${propertySize}&&status=${selectedPurpose}&&country=${selectedCountry}`
         );
         return data;
      },
   });

   const handlePurposeChange = (e) => {
      setSelectedPurpose(e.target.value);
      console.log(selectedPurpose);
      refetch();
   };

   const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
      refetch();
   };

   const handlePropertySizeChange = (e) => {
      setPropertySize(e.target.value);
   };

   // if (selectedPurpose === "sale") {
   //    navigate("/sell");
   // }

   return (
      <section className="py-[60px]">
         <Title title={"estates"} upperTitle={"view our"} />
         {/* Search Form */}
         <form className="max-w-4xl mx-auto search-form grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center px-6">
            {/* Search by Purpose */}
            <div className="inputBox ">
               <label className="" htmlFor="">
                  Purpose:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4  "
                  onChange={handlePurposeChange}
                  name="purpose"
               >
                  <option value=""></option>
                  {purposes.map((purpose) => (
                     <option key={purpose.id} value={purpose.purpose}>
                        {purpose.purpose.toLocaleUpperCase()}
                     </option>
                  ))}
               </select>
            </div>

            {/* Search by Country */}
            <div className="inputBox ">
               <label className="" htmlFor="">
                  Search by Country:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4  "
                  onChange={handleCountryChange}
                  name="country"
               >
                  <option value="">All</option>
                  {countries?.countries?.map((country) => (
                     <option key={country} value={country}>
                        {country}
                     </option>
                  ))}
               </select>
            </div>

            {/* Search by Division */}
            <div className="inputBox ">
               <label className="" htmlFor="">
                  Search by Division:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4  "
                  // onChange={handleCountryChange}
                  name="division"
               >
                  <option value="">All</option>
                  {/* {divisions?.map((division) => (
                     <option key={division} value={division}>
                        {division}
                     </option>
                  ))} */}
               </select>
            </div>

            {/* Search by Bedrooms */}
            <div className="inputBox ">
               <label className="" htmlFor="">
                  Bedrooms:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4  "
                  name="bedroom"
               >
                  <option value=""></option>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
               </select>
            </div>

            {/* Search by Property Type */}
            <div className="inputBox ">
               <label className="" htmlFor="">
                  Property Type:
               </label>
               <select
                  className="border border-ourDeeperGold py-2 px-4  "
                  name="bedroom"
               >
                  <option value="">Any</option>

                  <option value="test-commercial">Commercial</option>
                  <option value="test-residential">Residential</option>
               </select>
            </div>

            {/* Property Size Range */}
            <div className="inputBox max-w-[300px]">
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

            {/* Price Range Range */}
            <div className="inputBox max-w-[300px]">
               <label htmlFor="">Price:</label>
               <div className="relative py-2">
                  <input
                     className="property-range "
                     type="range"
                     min="1200"
                     max="8000"
                     step="100"
                     defaultValue="8000"
                  />
                  <span className="absolute left-0 -top-3">1200</span>
                  <span className="absolute right-0 -top-3">8000</span>
               </div>
               <p>Showing results for ${selectedPrice} and below</p>
            </div>
         </form>

         {/* Estates Cards */}
         {isLoading && <LoadingSpinnerSmall />}

         {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 ">
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
