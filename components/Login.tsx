"use client";
import react, { useState } from "react";
import { FieldError, SubmitHandler, useForm, UseFormRegister, UseFormReset, useFormState } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

// type LayoutType = Parameters<typeof Form>[0]['layout'];
interface IFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const form =  useForm <IFormValues>() ;
  const { register, formState, handleSubmit, reset } = form;
  const { errors } = formState as { errors: { name?: FieldError; email?: FieldError; password?: FieldError; confirmpassword?: FieldError; }; };
  const onSubmit = (data: IFormValues) => {
    const res = signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/jobs",
    });
  
    // console.log(data);
  };
  const signInWithGoogle = async () => {
    const res = await signIn("google", {
      redirect: true,
      callbackUrl: "/jobs",
    });
  };
  return (
    <>
      <div className="flex w-full flex-col gap-6 justify-center items-center bg-white  py-6 rounded-md">
        <h1 className="text-2xl font-black bg-#202430 ">Welcome back,</h1>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button
            className="w-[50%] flex gap-4 items-center  justify-center bg-white text-black font-bold py-1.5 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={signInWithGoogle}
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              className=""
              alt="Google logo"
            />
            Sign In with Google
          </button>

          <div className="flex justify-between w-[50%] items-center ">
            <div className="w-[45%] h-[1px] bg-gray-300"></div>
            <div>or</div>
            <div className="w-[45%] h-[1px] bg-gray-300"></div>
          </div>
          <div className="w-[50%] flex flex-col">
            <div className="flex flex-col items-start   ">
              <label htmlFor="email" className="mb-2 text-[#515B6F] text-sm">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="John.Doe@gmail.com"
                className="w-full rounded-lg py-2 border border-gray-300 outline-gray-200 placeholder-gray-300 focus:placeholder:text-white px-4"
                {...register("email", {
                  required: "Email is required",

                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email?.message && (
                <p className=" h-[20px] text-red-500 text-xs text-end self-start">
                  {" "}
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start py-2">
              <label htmlFor="password" className="mb-2 text-[#515B6F]">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder=" Enter password"
                className="w-full rounded-lg py-2 border border-gray-300 outline-gray-200 placeholder-gray-300  px-4 focus:placeholder:text-white"
                {...register("password", {
                  required: "password is required",
                })}
              />
              <p className="h-[20px] text-red-500 text-xs self-start">
                {errors.password?.message}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 items-center">
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-[50%] rounded-lg text-white font-bold bg-[#4640DE] py-2"
              data-testid= "login-button"
              type="submit"
            >
              Login
            </button>
            <div className="w-[50%] px-1.5">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#4640DE] self-start font-semibold">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
