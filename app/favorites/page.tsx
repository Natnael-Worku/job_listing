"use client";
import FavoriteCard from "@/components/FavoriteCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Data {
  eventID: string;
  title: string;
  opType: string;
  orgName: string;
  datePosted: string;
  dateBookmarked: string;
  logoUrl: string;
  location: string;
}

// Rest of the code...

const page = () => {
    const session = useSession()
    // console.log(session, "session object hi ");
    if (session.status !== 'authenticated') {
        redirect("/api/auth/signin?callbackUrl=/favorites")
    }
  const [data, setData] = useState<Data[] | undefined>();
  const [count , setCount] = useState <number>(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://akil-backend.onrender.com/bookmarks",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessSession")}`,
            },
          }
        );
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.data);
          console.log(jsonData.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [count]);

  return (
    <div className="flex flex-col md:flex-row  gap-10 items-center  justify-center">
      
      <div className="flex flex-col gap-5 items-center justify-center">
      {data?.map((item, index) => {
            return <FavoriteCard data={item } setCount=  {setCount} />;
        })}
      </div>

      {/* <FavoriteCard data={data} /> */}
    </div>
  );
};

export default page;
