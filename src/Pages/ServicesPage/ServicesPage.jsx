import useServices from "../../Hooks/useServices";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import Title from "../../components/Shared/Title/Title";

import "./ServicesPage.css";

const ServicesPage = () => {
   const [services, isLoading] = useServices();
   console.log(services);

   if (isLoading) return <LoadingSpinner />;

   return (
      <main className="pb-[70px] pt-[100px] min-h-[calc(100vh)]  servicePage">
         <Title
            title={"Services"}
            upperTitle={"What we provide"}
            titleColor="neutral-900"
         />

         <h2 className="text-neutral-900 text-center text-2xl max-w-3xl mx-auto md:-mt-14 px-6">
            At Sufiza property we offer multiple services - all are related to
            property solutions.
         </h2>
         {/* Cards */}
         <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto px-6 mt-10">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service} />
            ))}
         </ul>
      </main>
   );
};

export default ServicesPage;
