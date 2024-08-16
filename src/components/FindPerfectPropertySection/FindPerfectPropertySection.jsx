import { Link } from "react-router-dom";
import Title from "../Shared/Title/Title";

const FindPerfectPropertySection = () => {
   return (
      <section className="py-[10px] px-6">
         <Title title={"Find the perfect property for you"} />

         <div className="footer px-10 pb-6">
            <nav>
               <h6 className="footer-title">Useful Links</h6>
               <Link className="link link-hover">Home Loan</Link>
               <Link className="link link-hover">Real Estate Update</Link>
               <Link className="link link-hover">Innovative Home Ideas</Link>
               <Link className="link link-hover">Off-Market Property</Link>
            </nav>
            <nav>
               <h6 className="footer-title">New listing</h6>
               <Link className="link link-hover">1300 Sft 3-Bedroom</Link>
               <Link className="link link-hover">1404 Sft 3-Bedroom</Link>
               <Link className="link link-hover">1580 Sft 3-Bedroom</Link>
               <Link className="link link-hover">950 Sft 3-Bedroom</Link>
            </nav>
            <nav>
               <h6 className="footer-title">Residential Properties</h6>
               <Link className="link link-hover">
                  Ready Flat Sale In Dhanmondi
               </Link>
               <Link className="link link-hover">
                  Ready Flat Sale In Gulshan
               </Link>
               <Link className="link link-hover">
                  Ready Flat Sale In Uttara
               </Link>
               <Link className="link link-hover">
                  Ready Flat Sale In Bashundhara
               </Link>
               <Link className="link link-hover">
                  Ready Flat Sale In Banani
               </Link>
            </nav>
            <nav>
               <h6 className="footer-title">Commercial Properties</h6>
               <Link className="link link-hover">
                  Commercial space for Sale
               </Link>
               <Link className="link link-hover">Office space for Sale</Link>
               <Link className="link link-hover">
                  Commercial property for sale
               </Link>
               <Link className="link link-hover">
                  Small Office space for sale
               </Link>
               <Link className="link link-hover">Ready Shop for Sale</Link>
            </nav>
         </div>
      </section>
   );
};

export default FindPerfectPropertySection;
