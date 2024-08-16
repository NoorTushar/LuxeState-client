const ClientIframe = ({ link }) => {
   return (
      <div className="pb-10 flex justify-center ">
         <iframe
            className="rounded-xl border w-full lg:w-[300px] h-[300px] md:w-2/3 lg:h-[200px]"
            src={link.link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
         ></iframe>
      </div>
   );
};

export default ClientIframe;
