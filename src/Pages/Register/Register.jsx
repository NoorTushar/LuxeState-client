/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

import { useState } from "react";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Title from "../../components/Shared/Title/Title";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
   const [showPassword, setShowPassword] = useState(false);
   // const [errorMessage, setErrorMessage] = useState(null);
   const axiosPublic = useAxiosPublic();

   const {
      createUser,
      updateUser,
      setLoading,
      loginWithGoogle,
      sendEmailVerification,
   } = useAuthContext();

   const navigate = useNavigate();
   const location = useLocation();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   const onSubmit = () => {
      // getting values seperately from the fields
      const firstName = getValues("firstName");
      const lastName = getValues("lastName");
      const phone = getValues("phone");
      const address = getValues("address");
      const age = getValues("age");
      const userName = getValues("userName");
      const email = getValues("email");
      const photoURL = getValues("photoURL");
      const password = getValues("password");

      console.log(userName, email, photoURL, password);

      // creating an user object to send to database
      const user = {
         firstName,
         lastName,
         phone,
         address,
         age,
         userName,
         email,
         photoURL,
         password,
      };

      createUser(email, password)
         .then((result) => {
            updateUser(userName, photoURL).then(() => {
               sendEmailVerification(result.user).then(() => {
                  axiosPublic.post("/users", user).then((data) => {
                     console.log(data);
                     setLoading(false);
                     toast.success("Check Email for Verification");
                     navigate(location?.state || "/");
                  });
               });
            });
         })
         .catch((error) => {
            let errorMessage = error?.message
               .split("Firebase: Error (auth/")[1]
               .split(")")[0]
               .replace(/-/g, " ");

            toast.error(`Registration Unsuccessful: ${errorMessage}`);
         });
   };

   // login with google

   // const handleLoginWithGoogle = () => {
   //    loginWithGoogle()
   //       .then((result) => {
   //          console.log(result.user);
   //          toast.success("Login Success");
   //          navigate(location?.state || "/");
   //       })
   //       .catch((error) => {
   //          let errorMessage = error.message
   //             .split("Firebase: Error (auth/")[1]
   //             .split(")")[0]
   //             .replace(/-/g, " ");

   //          toast.error(`Login Unsuccessful: ${errorMessage}`);
   //       });
   // };

   return (
      <section className="py-[70px] min-h-[calc(100vh)] bg-ourBlack">
         <div className="mt-10">
            <Title title={"register"} upperTitle={"welcome"} />
         </div>
         <div className="w-full max-w-md space-y-4 mx-auto px-4  bg-transparent">
            <form onSubmit={handleSubmit(onSubmit)}>
               {/* Username Field */}
               <div className="mt-4">
                  <input
                     {...register("userName", {
                        required: {
                           value: true,
                           message: "Must provide a username.",
                        },
                     })}
                     type="text"
                     placeholder="User Name *"
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.userName && (
                     <span className="text-red-500 block mt-1 mb-2 ">
                        {errors.userName.message}
                     </span>
                  )}
               </div>

               {/* firstName Field */}
               <div className="mt-4">
                  <input
                     {...register("firstName")}
                     type="text"
                     placeholder="First Name"
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
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
                     {...register("lastName")}
                     type="text"
                     placeholder="Last Name"
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.lastName && (
                     <span className="text-red-500 block mt-1 mb-2 ">
                        {errors.lastName.message}
                     </span>
                  )}
               </div>

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
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
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
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.phone && (
                     <span className="text-red-500 block mt-1 mb-2">
                        {errors.phone.message}
                     </span>
                  )}
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
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.address && (
                     <span className="text-red-500 block mt-1 mb-2">
                        {errors.address.message}
                     </span>
                  )}
               </div>

               {/* PhotoURL Field */}
               {/* <div className="mt-4">
                  <input
                     {...register("photoURL", {
                        required: {
                           value: true,
                           message: "Must provide a photo URL.",
                        },
                     })}
                     type="text"
                     placeholder="Photo URL *"
                     className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                  />
                  {errors?.photoURL && (
                     <span className="text-red-500 block mt-1 mb-2 ">
                        {errors.photoURL.message}
                     </span>
                  )}
               </div> */}

               {/* Password Field */}
               <div className="mt-4">
                  <div className="relative">
                     <input
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Must provide a password.",
                           },
                           minLength: {
                              value: 6,
                              message:
                                 "Password must be at least of 6 characters",
                           },
                           pattern: {
                              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d!@#$%^&*()]?).{6,}$/,
                              message:
                                 "Must have at least one uppercase letter and one lowercase letter.",
                           },
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password *"
                        className="w-full p-3 border-b border-zinc-300 text-white bg-transparent outline-none duration-300  focus:border-ourPrimary"
                     />
                     <span className="absolute right-3 top-1/2 -translate-y-1/2 cu">
                        {showPassword ? (
                           <FaRegEye onClick={() => setShowPassword(false)} />
                        ) : (
                           <FaEyeSlash onClick={() => setShowPassword(true)} />
                        )}
                     </span>
                  </div>
                  {errors?.password && (
                     <span className="text-red-500 block mt-1 mb-2 ">
                        {errors.password.message}
                     </span>
                  )}
               </div>

               {/* register button */}

               <div className="flex items-center justify-center mt-8">
                  <button className="py-1.5 px-4 relative group overflow-hidden font-medium  inline-block border-ourDeeperGold border hover:border-black bg-ourDeeperGold text-white uppercase">
                     <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                     <span className="relative tracking-[2px] text-sm">
                        register
                     </span>
                  </button>
               </div>
            </form>

            {/* Google Login */}
            {/* <div className="text-center">
               <p>Register with social accounts</p>
               <button
                  onClick={handleLoginWithGoogle}
                  className="p-3 rounded-sm"
               >
                  <FaGoogle className="text-xl hover:text-ourGold duration-300 text-ourPrimary"></FaGoogle>
               </button>
            </div> */}

            <p className="text-base text-center">
               Already have an account?{"  "}
               <Link
                  to={"/login"}
                  className="underline text-gray-100 font-semibold "
               >
                  Login
               </Link>
            </p>
         </div>
      </section>
   );
};

export default Register;
