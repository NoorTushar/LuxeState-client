import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
   return (
      <>
         <NavBar />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default MainLayout;
