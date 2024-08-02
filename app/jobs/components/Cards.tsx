"use client";
import { useEffect, useState } from "react";
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

export default async function Cards() {
  const [jobs, setData] = useState<JobPosting[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://job-listing-green-beta.vercel.app/api/jobs")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {jobs?.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </>
  );
}
