import {
   FaFacebookF,
   FaGithub,
   FaLinkedin,
   FaXTwitter,
   FaYoutube,
} from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import logo from "../../../assets/logo/logo-company.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className="footer p-10">
            <aside>
               <img src={logo} className="max-w-[180px]" alt="" />
               <ul className="*:flex *:gap-2 *:items-center">
                  <li>
                     <FiPhone />
                     +880 1898-803231
                  </li>
                  <li>
                     <MdOutlineEmail /> sufizafamily@gmail.com
                  </li>
               </ul>
            </aside>
            <nav className="*:flex *:gap-2 *:items-center">
               <h6 className="footer-title">Property By Locations</h6>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Gulshan
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Banani
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Uttara
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Bashundhara
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Dhanmondi
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> Flats in Mirpur
               </Link>
            </nav>
            <nav className="*:flex *:gap-2 *:items-center">
               <h6 className="footer-title">Property By Bedrooms</h6>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> 2 Bedroom Apartments
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> 3 Bedroom Apartments
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> 4 Bedroom Apartments
               </Link>
               <Link className="link link-hover">
                  <MdOutlineKeyboardArrowRight /> 5 Bedroom Apartments
               </Link>
            </nav>
            <nav className="*:flex *:gap-2 *:items-center">
               <h6 className="footer-title">Important Links</h6>
               <a className="link link-hover">
                  <MdOutlineKeyboardArrowRight />
                  About us
               </a>
               <a className="link link-hover">
                  <MdOutlineKeyboardArrowRight />
                  F.A.Q.s
               </a>
               <a className="link link-hover">
                  <MdOutlineKeyboardArrowRight />
                  Blog
               </a>
               <a className="link link-hover">
                  <MdOutlineKeyboardArrowRight />
                  Testimonials
               </a>
               <a className="link link-hover">
                  <MdOutlineKeyboardArrowRight />
                  Contact Us
               </a>
            </nav>
         </div>
         {/* Bottom Footer */}
         <div></div>
         <footer className="footer footer-center border-t shad p-10 gap-4 text-">
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
      </footer>
   );
};

export default Footer;
