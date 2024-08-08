import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import SearchSection from "../../components/SearchSection/SearchSection";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
   return (
      <>
         <Banner />
         <div className="max-w-[1170px] mx-auto">
            <SearchSection />
            <Featured />
         </div>
         <Testimonials />
      </>
   );
};

export default Home;
