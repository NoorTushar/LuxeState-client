import { FaFacebookF, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo/logo-company.jpeg";

const Footer = () => {
   return (
      <footer className="footer footer-center bg-white p-10 gap-4">
         <img className="max-w-[200px]" src={logo} alt="logo" />
         <nav className="grid grid-flow-col gap-4 text-black">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Services</a>

            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
         </nav>

         <aside>
            <p className="text-black">
               Copyright © {new Date().getFullYear()} - All right reserved by
               Sufiza Property Solutions
            </p>

            {/* <p className="text-black">
               Website by{" "}
               <strong>
                  <a
                     className="text-ourDeeperGold font-bold"
                     href="https://www.facebook.com/NoorTusharKhan/"
                  >
                     Noor Tushar Khan
                  </a>
               </strong>
            </p> */}
         </aside>
         <nav>
            <div className="grid grid-flow-col gap-4">
               {/* facebook */}
               <a
                  href="#"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaFacebookF className=" text-black  text-sm"></FaFacebookF>
               </a>

               {/* linkedin */}
               <a
                  href="#"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaLinkedin className="text-black text-lg"></FaLinkedin>
               </a>

               {/* github */}
               <a
                  href="#"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaGithub className="text-black text-lg"></FaGithub>
               </a>

               {/* twitter */}
               <a
                  href="#"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaXTwitter className="text-black"></FaXTwitter>
               </a>
            </div>
         </nav>
      </footer>
   );
};

export default Footer;
