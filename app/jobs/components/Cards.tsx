import Card from "./Card";
import JobData from '../../../_data/jobs.json'
import { JobPosting } from "@/app/components/Jobs";




async function getJobs() {
  const res = await fetch("http://localhost:5000/job_postings");

  return res.json();
}

export default async function Cards() {
  // fetch data
  const jobs: JobPosting[] = JobData.job_postings.map(job => ({ job }));

// console.log(jobs[0].id);

  return (
    <>
      {jobs.map((job,index) => (
        <Card  index={String(index)} job={job} />
      ))}
    </>
  );
}
