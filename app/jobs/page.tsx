import Header from "@/components/Header";
import Cards from "@/components/Cards";
import getJobs from "@/Service/AllJobs";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";



export default async function Page  ()  {
  const session = await getServerSession(Options)
  // if (!session){
  //   redirect('/api/auth/signin?callbackUrl=/jobs')
  // }
  const {data,error}= await getJobs();
  return (
    <div className="lg:mt-16 lg:ml-16 lg:mr-72">
      <Header jobLength = {data.length} />
      <Cards  data = {data}/>
    </div>
  );
};

