import Card from "./Card";
// import JobData from '@/_data/jobs.json'
import { JobPosting } from "@/Types/Jobs";
import getJobs from "@/Service/AllJobs";



interface props {
  data: JobPosting[]
}

export default async function Cards({data}: props) {
  // fetch data
  


// console.log(jobs[0].id);

  return (
    <>
      {data.map((job:JobPosting) => (
        <Card  job={job} />
      ))}
    </>
  );
}
