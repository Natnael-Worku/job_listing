import Card from "./Card";

interface IdealCandidateTraits {
  age: string;
  gender: string;
  traits: string[];
}

// Define the interface for the job details
interface JobDetails {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

// Define the main interface for a job posting
export interface JobPosting {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidateTraits;
  when_where: string;
  about: JobDetails;
  company: string;
  image: string;
  id: string;
}

async function getJobs() {
  const res = await fetch("/api");

  return res.json();
}

export default async function Cards() {
  // fetch data
  const jobs: JobPosting[] = await getJobs();

  return (
    <>
      {jobs?.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </>
  );
}
