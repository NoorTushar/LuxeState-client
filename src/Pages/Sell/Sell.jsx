import Title from "../../components/Shared/Title/Title";

const Sell = () => {
   return (
      <section className="py-[70px] min-h-[calc(100vh)] bg-ourBlack">
         <div className="mt-10">
            <Title title={"sell"} upperTitle={"welcome"} />
         </div>
         <div className="text-center">
            <p className="max-w-xl mx-auto">
               You need to be an enlisted user with our company to be able to
               list a property for sell. Please contact us to go through the
               listing procedures.
            </p>
         </div>
      </section>
   );
};

export default Sell;
