"use client";
import React, {useEffect, useState} from "react";
import { Flex, Input, Typography } from "antd";
import type { GetProps } from "antd";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import CountdownTimer from "./CountDown";

type OTPProps = GetProps<typeof Input.OTP>;
interface OTPInput {
  onChange: (text: string) => void;
  OTP: string;
}



// ...


interface OTPprops{
    email:string;
    name:string;
    password:string;
    confirmpassword:string;
}
const Otp = (props:OTPprops) => {
//   const { session } = useSession();
  console.log(props);
  const router = useRouter();

  const onChange: OTPInput["onChange"] = (text) => {
    if (text.length === 4) {
      sharedProps.OTP = text;
    } else {
      sharedProps.OTP = "";
    }
  };

  const sharedProps: OTPInput = {
    onChange,
    OTP: "",
  };
  const HandleOnClick = async () => {
    if (sharedProps.OTP) {
      // console.log('OTP is:', sharedProps.OTP)
      const response = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: props.email,
            OTP: sharedProps.OTP,
          }),
        }
      );

      if (!response.ok) {
        alert("Invalid OTP");
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      router.push("/jobs");
    }
  };



  return (

    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-[55%] md:w-[30%] gap-10">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold text-[#25324B] ">Verify Email</h1>
          <p className="text-[#7C8493] text-sm font-light">
            We've sent a verification code to the email address you provided. To
            complete the verification process, please enter the code here.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center w-[100%]">
          <Input.OTP size="large"   length={4} {...sharedProps} />
          <CountdownTimer email={props.email} password={props.password} name={props.name} confirmpassword={props.confirmpassword} />
        </div>
        <button
          // disabled={!sharedProps.OTP}
          className="bg-[#4640DE] text-white w-[100%] py-2 rounded-lg "
          onClick={HandleOnClick}
        >
          continue
        </button>
      </div>
    </div>
  );
};

export default Otp;
