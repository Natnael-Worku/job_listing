'use client'
import react, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

// type LayoutType = Parameters<typeof Form>[0]['layout'];
interface IFormValues {
  email: string;
  password: string;
}

export default  function Login() {
  const form = useForm();
  const { register, formState, handleSubmit, reset } = form;
  const { errors } = formState;
  const onSubmit = (data: IFormValues) => {
    const res = signIn('credentials', {
        email:data.email,
        password:data.password,
        redirect:true,
        callbackUrl:'/jobs'
    })
    
    // console.log(data);
  };
  const signInWithGoogle =  async ()=>{
    const res = await signIn('google',{
        redirect:true,
        callbackUrl:'/jobs'
    })
  }
  return (
    <>
      <div className="flex w-full h-screen flex-col  justify-center items-center ">
        <h1 className="text-4xl font-black  mb-8 bg-#202430">Welcome back,</h1>

        <button
          className="w-[40%] flex items-center justify-center bg-white text-black font-bold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none my-3 focus:shadow-outline"
          type="button"
          onClick={signInWithGoogle}
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            className="mr-2"
            alt="Google logo"
          />
          Sign In with Google
        </button>

        <div className="flex justify-between w-[50%] my-2">
          <div className="w-[40%] h-[1px] bg-gray-300"></div>
          <div className="w-[40%] h-[1px] bg-gray-300"></div>
        </div>
        <div className="w-3/5">
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="email" className="mb-2 bg-#515B6F">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder=" enter email adress"
              className="w-full rounded-lg py-2 border border-gray-300 outline-gray-200"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="text-red-500 text-sm text-end self-end">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="password" className="mb-2 bg-#515B6F">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder=" enter password"
              className="w-full rounded-lg py-2 border border-gray-300 outline-gray-200"
              {...register("password", {
                required: "password is required",
              })}
            />
            <p className="text-red-500 text-sm self-end">
              {errors.password?.message}
            </p>
          </div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full rounded-3xl text-white font-bold mb-4 bg-[#4640DE] py-4"
          >
            Login
          </button>
          <div>
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#4640DE]">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
