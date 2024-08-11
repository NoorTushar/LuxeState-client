import { Link, NavLink } from "react-router-dom";
import companyLogo from "../../../assets/logo/logo-company.jpeg";
import "./NavBar.css";
import useAuthContext from "../../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import { MdOutlineMenu } from "react-icons/md";

const navItems = (
   <>
      <li>
         <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
         <NavLink to={"/about"}>About Us</NavLink>
      </li>
      {/* Properties Mega menu */}
      <li>
         <details>
            <summary>Properties</summary>

            <ul className="p-2 bg-white rounded-none border-ourPrimary border">
               {/* Buy */}
               <li>
                  <details>
                     <summary>Buy</summary>
                     <ul className="p-2">
                        <li>
                           <NavLink to={"/buy-res"}>Residential</NavLink>
                        </li>
                        <li>
                           <NavLink to={"/buy-comm"}>Commercial</NavLink>
                        </li>
                     </ul>
                  </details>
               </li>
               {/* Rent */}
               <li>
                  <details>
                     <summary>Rent</summary>
                     <ul className="p-2">
                        <li>
                           <NavLink to={"/rent-res"}>Residential</NavLink>
                        </li>
                        <li>
                           <NavLink to={"/rent-comm"}>Commercial</NavLink>
                        </li>
                     </ul>
                  </details>
               </li>
               {/* Sell */}
               <li>
                  <details>
                     <summary>Sell</summary>
                     <ul className="p-2">
                        <li>
                           <Link to={"/sell"}>Residential</Link>
                        </li>
                        <li>
                           <Link to={"/sell"}>Commercial</Link>
                        </li>
                     </ul>
                  </details>
               </li>
            </ul>
         </details>
      </li>
      <li>
         <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
         <a>Blog</a>
      </li>
      <li>
         <NavLink to={"/contact"}>Contact</NavLink>
      </li>
   </>
);

const NavBar = () => {
   const { user, logoutUser } = useAuthContext();

   const handleLogOut = (e) => {
      e.preventDefault();
      logoutUser()
         .then(() => {
            toast.success("logged out");
         })
         .catch((error) => console.error(error));
   };
   return (
      <header className="navbar bg-white fixed top-0 left-0 w-full z-50 shadow shadow-ourCoffee md:px-4">
         <div className="navbar-start">
            {/* Dropdown Menu: Only visible in mobile screen */}
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <MdOutlineMenu className="text-ourPrimary text-2xl" />
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {navItems}
               </ul>
            </div>
            <Link
               to={"/"}
               className="text-lg flex items-center gap-1 tracking-[3px] group"
            >
               <img className="w-28" src={companyLogo} alt="" />
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <>
                  {/* Show User Image */}

                  {/* <div
                     className="tooltip  z-50  tooltip-bottom font-didact mr-2"
                     data-tip={user?.displayName || "No username set yet"}
                  >
                     <img
                        className="size-8 md:size-10 object-cover rounded-full cursor-pointer"
                        src={user?.photoURL}
                        alt=""
                     ></img>
                  </div> */}

                  {/* Show Logout Button */}
                  <button
                     onClick={handleLogOut}
                     className="py-1.5 px-4 relative group overflow-hidden font-medium inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase login-button rounded-md"
                  >
                     <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                     <span className="relative tracking-[2px] text-sm">
                        Logout
                     </span>
                  </button>
               </>
            ) : (
               <Link
                  to={"/login"}
                  className="py-1.5 px-4 relative group overflow-hidden font-medium inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase rounded-md"
               >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                  <span className="relative tracking-[2px] text-sm">Login</span>
               </Link>
            )}
         </div>
      </header>
   );
};

export default NavBar;
