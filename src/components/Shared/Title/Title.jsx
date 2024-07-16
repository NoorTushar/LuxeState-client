/* eslint-disable react/prop-types */
const Title = ({ title, upperTitle }) => {
   return (
      <div className="text-center uppercase mb-10 md:mb-20">
         <h4 className="tracking-[6px] text-white">{upperTitle}</h4>
         <h2 className="text-ourPrimary text-4xl md:text-5xl font-light tracking-[10px] mt-3">
            {title}
         </h2>
      </div>
   );
};

export default Title;
