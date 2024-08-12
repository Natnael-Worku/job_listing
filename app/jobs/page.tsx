"use client";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import getJobs from "@/Service/AllJobs";
import { getSession, useSession } from "next-auth/react";
import { use, useEffect, useState } from "react";
import SessionType from "@/Types/SessionType";

/**
 * Renders the Page component.
 *
 * @returns The rendered Page component.
 */
export default function Page() {
  const session = useSession() as unknown as SessionType | null;
  const [token, setToken] = useState<string>("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setToken(session?.data?.accessToken ?? "");
    // console.log(session?.data?.accessToken, "session object from job page ");

    const fetchJobs = async () => {
      const res = await getJobs(session?.data?.accessToken ?? "");
      setData(res.data);
      // console.log(data, "data from page");
    };

    fetchJobs();
  }, [session?.data?.accessToken, data]);

  return (
    <div className="lg:mt-16 lg:ml-16 lg:mr-72">
      <Header jobLength={data?.length} />
      <Cards data={data} token={token} />
    </div>
  );
}
