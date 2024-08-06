import Title from "../../components/Shared/Title/Title";
import { TiTick } from "react-icons/ti";

import "./AboutUs.css";

const AboutUsPage = () => {
   return (
      <main className="pb-[70px] pt-[100px] min-h-[calc(100vh)] bg-ourBlack">
         <Title upperTitle={"about"} title={"Sufiza Property Solutions"} />
         <div className="bg-aboutUs"></div>

         <div className="max-w-4xl mx-auto px-6 mt-8 md:mt-14 text-white">
            <p className="">
               Sufiza Property Solutions is the Property Solutions Provider in
               Dhaka, helping people to find their desired Apartment, for Buy,
               Sale & Rent. <br />
               <br />
               And we sell property not only in Bangladesh but also in different
               countries. Like Singapore, Malaysia, Dubai etc. <br />
               <br />
               The housing demand rate is increasing day by day in Bangladesh.
               At this point, Sufiza Property Solutions is a reliable name for
               buying or selling properties that assure accurate prices and
               secured properties. Our sincerity and strong paperwork are our
               biggest strengths. We pride ourselves on doing business
               responsibly, valuing customers, creating great teams, and
               building a better future together.{" "}
            </p>

            {/* list items */}
            <ul className="mt-6">
               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We have a vast collection of properties in locations across
                  Dhaka suited to your needs and budget.
               </li>

               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We ensure that the property owners and related documents are
                  genuine by thorough screening so that you can relax.
               </li>

               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We offer free home inspection to ensure quality of the
                  property.
               </li>

               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We provide legal vetting services and documentation support
                  when drafting Agreement, Sale Permission, and other legal
                  documents.
               </li>

               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We also offer after-sales support such as registration and
                  mutation of property, document verification, home loans, and
                  home shifting.
               </li>

               <li className="flex">
                  <TiTick className="text-ourPrimary text-2xl" />
                  We have a large network of potential buyers, sellers, and
                  tenants for them to connect with one another and with us.
               </li>
            </ul>

            <p className="mt-6">
               Contact us to buy or sell your property in Dhaka. <br />
               Phone: +880 1898-803231 <br />
               Email: sufizafamily@gmail.com <br />
               We also have a user-friendly website:{" "}
               <a
                  className="text-ourPrimary"
                  href="www.sufizaproperty.com"
                  target="_blank"
               >
                  www.sufizaproperty.com
               </a>
            </p>
         </div>
      </main>
   );
};

export default AboutUsPage;
