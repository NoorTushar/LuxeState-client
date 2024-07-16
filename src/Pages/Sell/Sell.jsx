import Title from "../../components/Shared/Title/Title";

const Sell = () => {
   return (
      <section className="py-[70px] min-h-[calc(100vh)] bg-ourBlack">
         <div className="mt-10">
            <Title title={"sell"} upperTitle={"welcome"} />
         </div>
         <div className="text-center">
            <p>
               You need to be a valid user to be able to list a property for
               sell.
            </p>
         </div>
      </section>
   );
};

export default Sell;
