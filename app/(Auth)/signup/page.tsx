"use client";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import { DeepMap, FieldError, useForm } from "react-hook-form";
import Otp from '../../../components/Otp'

interface SignUpFormValues {
name: string;
email: string;
password: string;
confirmpassword: string;
}

const page = () => {

   const [IsSignUp, setIsSignUp] = React.useState(true);
   const [dataVals, setDataVals] = React.useState<SignUpFormValues>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
   })
   
   
  const form = useForm <SignUpFormValues> ();
  const { register, formState, handleSubmit, reset } = form;
  const { errors } = formState as { errors: { name?: FieldError; email?: FieldError; password?: FieldError; confirmpassword?: FieldError; }; };
  const signInWithGoogle = async () => {
    const res = await signIn("google", {
      redirect: true,
      callbackUrl: "/jobs",
    });
  };
  const onSubmit = async (data : SignUpFormValues) => {

    try {
        if (data.confirmpassword !== data.password){
          return 
        }
        const response = await fetch("https://akil-backend.onrender.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            confirmpassword: data.confirmpassword,
            role: "user",
          }),
        });
  
        if (!response.ok ) {
          alert("error")
          throw new Error("Network response was not ok");
        }
  
        const result = await response.json();
        console.log(result);
        setDataVals(data)
        reset();
        setIsSignUp(false);
        // redirect("/jobs"); 
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
  



  };



  return (

     <>
      
      { IsSignUp ? 
      
      (<div>
        
        <div className="flex w-full  flex-col  justify-center items-center ">
         <h1 className="text-3xl font-black  py-2 bg-#202430 max-w-[90%]"> Sign Up Today! </h1>
         <button
           className="w-50 flex items-center justify-center bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none my-3 focus:shadow-outline"
           type="button"
           onClick={signInWithGoogle}
         >
           <img
             src="https://img.icons8.com/color/16/000000/google-logo.png"
             className="mr-2"
             alt="Google logo"
           />
           <span className="text-[#4640DE]">Sign Up with Google</span>
         </button>
  
         <div className="flex w-[50%] md:w-[30%] flex-col items-start mb-4">
           <label htmlFor="full-name" className="mb-2 text-sm text-[#515B6F]">
             Full Name <span className="text-red-500">*</span>
           </label>
           <input
             type="text"
             id="full-name"
             placeholder=" Enter your full name"
             className="w-full rounded-lg py-1 px-3 border border-gray-300 outline-gray-200 placeholder-gray-300 "
             {...register("name", {
               required: "full name is required",
             })}
           />
           <p className="text-red-500 text-xs">{errors.name?.message}</p>
         </div>
  
         <div className="flex w-[50%] md:w-[30%] flex-col items-start mb-4">
           <label htmlFor="email" className="mb-2 text-sm text-[#515B6F]">
             Email Address <span className="text-red-500">*</span>
           </label>
           <input
             type="text"
             id="email"
             placeholder=" Enter your emial address"
             className="w-full rounded-lg py-1 px-3 border border-gray-300 outline-gray-200 placeholder-gray-300 placeholder:px-4 "
             {...register("email", {
               required: "email is required",
               pattern: {
                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                 message: "Invalid email address",
               },
             })}
           />
           <p className="text-red-500 text-xs">{errors.email?.message}</p>
         </div>
  
         <div className="flex w-[50%] md:w-[30%] flex-col items-start mb-4">
           <label htmlFor="password" className="mb-2 text-sm text-[#515B6F]">
             Password <span className="text-red-500">*</span>
           </label>
           <input
             type="password"
             id="password"
             placeholder=" Enter your password"
             className="w-full rounded-lg py-1 px-3 border border-gray-300 outline-gray-200 placeholder-gray-300  "
             {...register("password", {
               required: "password is required",
             })}
           />
           <p className="text-red-500 text-xs">
             {errors.password?.message}
           </p>
         </div>
  
         <div className="flex w-[50%] md:w-[30%] flex-col items-start mb-4">
           <label htmlFor="confirm-password" className="mb-2 text-sm text-[#515B6F]">
             Confirm Password <span className="text-red-500">*</span>
           </label>
           <input
             type="password"
             id="confirm-password"
             placeholder=" Enter your password again"
             className="w-full rounded-lg py-1 px-3 border border-gray-300 outline-gray-200 placeholder-gray-300  "
             {...register("confirmpassword", {
               required: "password  is required to be filled again",
             })}
           />
           <p className="text-red-500 text-xs">
             {errors.confirmpassword?.message}
           </p>
         </div>
  
         <button
           onClick={handleSubmit(onSubmit)}
           className="w-[50%] md:w-[30%] rounded-3xl text-white font-bold mb-4 bg-[#4640DE] py-4"
         >
           continue
         </button>
  
         <div>
           Already have an account?
           <Link href="/signin" className="text-[#4640DE] font-semibold">
             Sign In
           </Link>
         </div>
       </div>

      </div>) 
      
      
      : (<div>
        
        <Otp email = {dataVals.email} name= {dataVals.name}  password= {dataVals.password} confirmpassword={dataVals.confirmpassword}   />

      </div>)
        
      }
      

      </>
      //   


        



  
);


};

export default page;


// fodaxef584@mvpalace.com