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
      <footer className="border-t">
         {/* Middle Footer */}
         <div className="footer p-10">
            <aside>
               <img src={logo} className="max-w-[180px]" alt="" />
               <ul className="*:flex *:gap-2 *:items-center">
                  <li className="mt-2">
                     <FiPhone />
                     +880 1898-803231
                  </li>
                  <li className="mt-2">
                     <MdOutlineEmail /> sufizafamily@gmail.com
                  </li>

                  {/* Social Links */}
                  <li>
                     <nav className="mt-4">
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
                        </div>
                     </nav>
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
         <div className="bg-ourCoffee py-3 text-white">
            <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 flex-wrap gap-y-4">
               <p className="">
                  © Sufiza Property Solutions {new Date().getFullYear()} - All
                  rights reserved
               </p>
               <ul className="flex items-center gap-x-6 flex-wrap gap-y-2 *:flex *:items-center *:gap-1">
                  <li>
                     <MdOutlineKeyboardArrowRight />
                     <Link>Why Sufiza Property Solutions?</Link>
                  </li>
                  <li>
                     <MdOutlineKeyboardArrowRight />
                     <Link>FAQs</Link>
                  </li>
                  <li>
                     <MdOutlineKeyboardArrowRight />
                     <Link>Careers</Link>
                  </li>
                  <li>
                     <MdOutlineKeyboardArrowRight />
                     <Link>Privacy Policy</Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
