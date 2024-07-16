import { FaFacebookF, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo/luxstate-logo-black-text.png";

const Footer = () => {
   return (
      <footer className="footer footer-center bg-gray-950 p-10 gap-4">
         <img className="max-w-[70px]" src={logo} alt="logo" />
         <nav className="grid grid-flow-col gap-4 text-white">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
         </nav>

         <aside>
            <p>
               Copyright © ${new Date().getFullYear()} - All right reserved by
               LuxEstate
            </p>

            <p className="">
               Website by{" "}
               <strong>
                  <a
                     className="text-ourPrimary font-bold"
                     href="https://www.facebook.com/NoorTusharKhan/"
                  >
                     Noor Tushar Khan
                  </a>
               </strong>
            </p>
         </aside>
         <nav>
            <div className="grid grid-flow-col gap-4">
               {/* facebook */}
               <a
                  href="https://www.facebook.com/NoorTusharKhan/"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaFacebookF className=" text-white  text-sm"></FaFacebookF>
               </a>

               {/* linkedin */}
               <a
                  href="https://www.linkedin.com/in/noortushar/"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaLinkedin className="text-white text-lg"></FaLinkedin>
               </a>

               {/* github */}
               <a
                  href="https://github.com/NoorTushar"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaGithub className="text-white text-lg"></FaGithub>
               </a>

               {/* twitter */}
               <a
                  href="https://twitter.com/NoorTusharKhan"
                  target="_blank"
                  className="size-11 border border-ourPrimary bg-opacity-80 rounded-full flex justify-center items-center bg-ourOrange cursor-pointer duration-300 hover:bg-ourPrimary hover:border-ourPrimary group"
               >
                  <FaXTwitter className="text-white text-base"></FaXTwitter>
               </a>
            </div>
         </nav>
      </footer>
   );
};

export default Footer;
