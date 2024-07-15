import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import SearchSection from "../../components/SearchSection/SearchSection";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
   return (
      <>
         <Banner />
         <SearchSection />
         <Featured />
         <Testimonials />
      </>
   );
};

export default Home;
