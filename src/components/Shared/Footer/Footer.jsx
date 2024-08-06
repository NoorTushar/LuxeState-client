import {
   FaFacebookF,
   FaGithub,
   FaLinkedin,
   FaXTwitter,
   FaYoutube,
} from "react-icons/fa6";
import logo from "../../../assets/logo/logo-company.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer className="footer footer-center bg-white p-10 gap-4">
         <Link to={"/"}>
            <img className="max-w-[200px]" src={logo} alt="logo" />
         </Link>
         <nav className="grid grid-flow-col gap-4 text-black">
            <Link to={"/about"} className="link link-hover">
               About us
            </Link>
            <Link to={"/services"} className="link link-hover">
               Services
            </Link>

            <a className="link link-hover">Blog</a>
            <Link to={"/contact"} className="link link-hover">
               Contact
            </Link>
         </nav>

         <aside>
            <p className="text-black">
               Copyright © {new Date().getFullYear()} - All right reserved by
               Sufiza Property Solutions
            </p>
         </aside>
         <nav>
            <div className="grid grid-flow-col gap-4">
               {/* facebook */}
               <a
                  href="https://www.facebook.com/SufizaProperty"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaFacebookF className=" text-black  text-sm"></FaFacebookF>
               </a>

               {/* linkedin */}
               <a
                  href="https://www.linkedin.com/in/sufiza-property/"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaLinkedin className="text-black text-lg"></FaLinkedin>
               </a>

               {/* github */}
               <a
                  href="https://www.youtube.com/channel/UCKuHeg1roTiGWaKTDD6XS9g"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaYoutube className="text-black text-lg"></FaYoutube>
               </a>

               {/* twitter */}
               {/* <a
                  href="#"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaXTwitter className="text-black"></FaXTwitter>
               </a> */}
            </div>
         </nav>
      </footer>
   );
};

export default Footer;
