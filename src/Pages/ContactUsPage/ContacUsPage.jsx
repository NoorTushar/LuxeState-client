/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Title from "../../components/Shared/Title/Title";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const ContactUsPage = () => {
   const axiosPublic = useAxiosPublic();

   const {
      register,
      handleSubmit,
      reset,
      getValues,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      // this data is an object which has all the field name and values
      console.log(data);
      try {
         // Send the form data to the server
         const response = await axiosPublic.post("/contact", data);
         console.log(response.data);
         if (response.data === "Message sent successfully") {
            reset();
         }
      } catch (error) {
         console.error("Error sending message:", error);
      }
   };
   return (
      <main className="pb-[70px] pt-[100px] min-h-[calc(100vh)">
         <Title title={"Contact Us"} />

         <div className="max-w-2xl px-6 mx-auto">
            {/* start: form */}
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid sm:grid-cols-2 sm:gap-6">
                  {/* firstName Field */}
                  <div className="mt-4">
                     <input
                        {...register("firstName", {
                           required: {
                              value: true,
                              message: "Must provide a firstName.",
                           },
                        })}
                        type="text"
                        placeholder="First Name *"
                        className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                     />
                     {errors?.firstName && (
                        <span className="text-red-500 block mt-1 mb-2 ">
                           {errors.firstName.message}
                        </span>
                     )}
                  </div>

                  {/* lastName Field */}
                  <div className="mt-4">
                     <input
                        {...register("lastName", {
                           required: {
                              value: true,
                              message: "Must provide a lastName.",
                           },
                        })}
                        type="text"
                        placeholder="Last Name *"
                        className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                     />
                     {errors?.lastName && (
                        <span className="text-red-500 block mt-1 mb-2 ">
                           {errors.lastName.message}
                        </span>
                     )}
                  </div>
               </div>

               {/* address Field */}
               <div className="mt-4">
                  <input
                     {...register("address", {
                        required: {
                           value: true,
                           message: "Must provide your home/ office address.",
                        },
                     })}
                     type="text"
                     placeholder="Home/ Office Address *"
                     className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.address && (
                     <span className="text-red-500 block mt-1 mb-2">
                        {errors.address.message}
                     </span>
                  )}
               </div>

               <div className="grid sm:grid-cols-2 sm:gap-6">
                  {/* Email Field */}
                  <div className="mt-4">
                     <input
                        {...register("email", {
                           required: {
                              value: true,
                              message: "Must provide an email",
                           },
                           pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Must provide a valid email address",
                           },
                        })}
                        type="email"
                        placeholder="Email *"
                        className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                     />
                     {errors?.email && (
                        <span className="text-red-500 block mt-1 mb-2 ">
                           {errors.email.message}
                        </span>
                     )}
                  </div>

                  {/* phone Field */}
                  <div className="mt-4">
                     <input
                        {...register("phone", {
                           required: {
                              value: true,
                              message: "Must provide your contact number.",
                           },
                        })}
                        type="text"
                        placeholder="Phone *"
                        className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                     />
                     {errors?.phone && (
                        <span className="text-red-500 block mt-1 mb-2">
                           {errors.phone.message}
                        </span>
                     )}
                  </div>
               </div>

               {/* comment Field */}
               <div className="mt-4">
                  <textarea
                     {...register("comment", {
                        required: {
                           value: true,
                           message: "Must provide your comment.",
                        },
                     })}
                     rows={8}
                     placeholder="Your comment *"
                     className="w-full p-3 border-b border-zinc-300  bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.comment && (
                     <span className="text-red-500 block mt-1 mb-2">
                        {errors.comment.message}
                     </span>
                  )}
               </div>

               {/* Submit Button */}
               <div className="flex items-center justify-center mt-8">
                  <button className="py-2.5 px-4 relative group overflow-hidden font-medium  inline-block custom-next border-ourDeeperGold border hover:border-black bg-ourCoffee text-white uppercase rounded-md">
                     <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-neutral-900 group-hover:h-full opacity-90"></span>
                     <span className="relative tracking-[2px] text-sm">
                        Send Message
                     </span>
                  </button>
               </div>
            </form>
            {/* end: form */}

            {/* start: Social Links */}
            <ul className="flex flex-col gap-4 flex-wrap mt-20">
               <li>Phone no : +880 1898-803231</li>
               <li>E-mail : sufizafamily@gmail.com</li>
               <li className="flex gap-2">
                  <FaFacebookF className="text-xl" />
                  <a
                     target="_blank"
                     href="https://www.facebook.com/SufizaProperty"
                  >
                     Facebook
                  </a>
               </li>
               <li className="flex gap-2">
                  <FaLinkedin className="text-xl" />
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/sufiza-property/ "
                  >
                     LinkedIn
                  </a>
               </li>
               <li className="flex gap-2">
                  <FaYoutube className="text-2xl" />
                  <a
                     className="break-words"
                     target="_blank"
                     href="https://www.youtube.com/channel/UCKuHeg1roTiGWaKTDD6XS9g"
                  >
                     Youtube
                  </a>
               </li>
            </ul>
            {/* end: Social Links */}
         </div>
      </main>
   );
};

export default ContactUsPage;
