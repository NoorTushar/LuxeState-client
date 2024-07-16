import { Link } from "react-router-dom";
import navLogo from "../../../assets/logo/luxtate-logo-gold.png";
import "./NavBar.css";
import useAuthContext from "../../../Hooks/useAuthContext";
import toast from "react-hot-toast";

function isValidURL(url) {
   if (!url) return false; // If URL is empty, consider it invalid
   const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
         "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
         "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
         "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
         "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
         "(\\#[-a-z\\d_]*)?$",
      "i"
   ); // fragment locator
   return !!pattern.test(url);
}

const navItems = (
   <>
      <li>
         <a>Home</a>
      </li>

      <li>
         <a>About Us</a>
      </li>
      {/* Properties Mega menu */}
      <li>
         <details>
            <summary>Properties</summary>

            <ul className="p-2">
               {/* Buy */}
               <li>
                  <details>
                     <summary>Buy</summary>
                     <ul className="p-2">
                        <li>
                           <a>Residential</a>
                        </li>
                        <li>
                           <a>Commercial</a>
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
                           <a>Residential</a>
                        </li>
                        <li>
                           <a>Commercial</a>
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
                           <a>Residential</a>
                        </li>
                        <li>
                           <a>Commercial</a>
                        </li>
                     </ul>
                  </details>
               </li>
            </ul>
         </details>
      </li>
      <li>
         <a>Services</a>
      </li>
      <li>
         <a>Blog</a>
      </li>
      <li>
         <a>Contact</a>
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
      <header className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 shadow shadow-ourPrimary">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {navItems}
               </ul>
            </div>
            <Link
               to={"/"}
               className="text-lg flex items-center gap-1 tracking-[3px] group"
            >
               <img
                  className="w-8 object-cover group-hover:"
                  src={navLogo}
                  alt=""
               />
               <h4 className="text-ourPrimary font-medium">LUXESTATE</h4>
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <>
                  <div
                     className="tooltip  z-50  tooltip-bottom font-didact mr-2"
                     data-tip={user?.displayName || "No username set yet"}
                  >
                     <img
                        className="size-8 md:size-10 object-cover rounded-full cursor-pointer"
                        src={user?.photoURL}
                        alt=""
                     ></img>
                  </div>
                  <button
                     onClick={handleLogOut}
                     className="py-1.5 px-4 relative group overflow-hidden font-medium bg-transparent inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase"
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
                  className="py-1.5 px-4 relative group overflow-hidden font-medium bg-transparent inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase"
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
