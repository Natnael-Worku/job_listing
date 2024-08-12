import Card from "./Card";
// import JobData from '@/_data/jobs.json'
import { JobPosting } from "@/Types/Jobs";

interface props {
  data: JobPosting[];
  token: string;
}

/**
 * Renders a list of cards based on the provided data.
 *
 * @param {Object[]} data - The array of job postings data.
 * @param {string} token - The authentication token.
 * @returns {JSX.Element} The rendered list of cards.
 */
export default function Cards({ data, token }: props) {
  return (
    <>
      {data?.map((job: JobPosting, index: number) => (
        <Card job={job} key={job.id} token={token} />
      ))}
    </>
  );
}
