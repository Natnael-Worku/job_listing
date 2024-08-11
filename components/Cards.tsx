import Card from "./Card";
// import JobData from '@/_data/jobs.json'
import { JobPosting } from "@/Types/Jobs";
import getJobs from "@/Service/AllJobs";

interface props {
  data: JobPosting[];
  token:string
}

export default function Cards({ data,token }: props) {
  // fetch data

  // console.log(jobs[0].id);

  return (
    <>
      {data.map((job: JobPosting, index: number) => (
        <Card job={job} key={job.id} />
      ))}
    </>
  );
}
