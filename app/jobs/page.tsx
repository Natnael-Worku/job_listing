import Header from "@/components/Header";
import Cards from "@/components/Cards";
import getJobs from "@/Service/AllJobs";



export default async function Page  ()  {
  const {data,error}= await getJobs();
  return (
    <div className="lg:mt-16 lg:ml-16 lg:mr-72">
      <Header jobLength = {data.length} />
      <Cards  data = {data}/>
    </div>
  );
};

