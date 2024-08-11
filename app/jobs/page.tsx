"use client";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import getJobs from "@/Service/AllJobs";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getSession, useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
interface props {
  token:string ;
}
export default function Page({token}:props) {
  // const session = useSession();
  // const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  // console.log(session, "session object hi ");
  useEffect(() => {
    const y = async () => {
      const session = await getSession();
      // console.log(session, "session object from job page ");
      // setToken(session?.accessToken);
      localStorage.setItem("accessSession", session?.accessToken);
    };
    y();

    const fetchJobs = async () => {
    const res = await getJobs(localStorage.getItem("accessSession")?? '');
    const items = res;
    // console.log(items.data)
    setData(items.data)
  }

  fetchJobs() 
  });
  // console.log(session.status, " hihihihi from here homepage ");

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/jobs");
  // }
  // const { data, error } = use(getJobs(token));
  // console.log(data, "data from page");
  // console.log(token, "token from page");
  return (
    <div className="lg:mt-16 lg:ml-16 lg:mr-72">
      <Header jobLength={data.length} />
      <Cards data={data} token = {token} />
    </div>
  );
}
