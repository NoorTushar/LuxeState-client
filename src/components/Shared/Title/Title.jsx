/* eslint-disable react/prop-types */
const Title = ({ title, upperTitle, titleColor = "ourPrimary" }) => {
   return (
      <div className="text-center uppercase mb-10 md:mb-20">
         <h4
            className={`tracking-[6px]  text-sm md:text-base text-${titleColor}`}
         >
            {upperTitle}
         </h4>
         <h2
            className={`text-${titleColor} text-3xl md:text-5xl font-light tracking-[10px] mt-3 px-6`}
         >
            {title}
         </h2>
      </div>
   );
};

export default Title;
