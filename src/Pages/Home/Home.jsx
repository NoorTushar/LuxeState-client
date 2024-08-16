import Banner from "../../components/Banner/Banner";
import ClientsVideoSection from "../../components/ClientsVideoSection/ClientsVideoSection";
import Featured from "../../components/Featured/Featured";
import RecentSection from "../../components/RecentSection/RecentSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
   return (
      <div className="">
         <Banner />
         <Featured />
         <RecentSection />
         <div className="max-w-[1170px] mx-auto">{/* <SearchSection /> */}</div>
         <ClientsVideoSection />
         <Testimonials />
      </div>
   );
};

export default Home;
