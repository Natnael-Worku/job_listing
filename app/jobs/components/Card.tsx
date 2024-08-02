import React from "react";
import job1 from "@public/Images/job1.png";
import { Inperson,Remote } from "./JobType";
import { PrimaryTag,SecondaryTag } from "./Tag";

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
  interface props{
    job: JobPosting;
  }
const Card = ({job}:props) => {
  return (
    <div className="border border-gray-300 rounded-3xl  mt-8  ">
      <div className="flex m-8  justify-center">
        <img
          src={"/Images" + job.image}
          className="w-16 h-16  rounded-full "
          alt="Job logo"
        />

        <div className="m-0 ml-10 p-0">
          <div>
            <div className=" text-textPrimary text-xl font-semibold mb-2">
              {job.title}
            </div>
            <div className="text-textSecondary m-0 mb-2 p-0">
              <span className="font-normal font-base">{job.company} . </span>
              <span className="font-normal font-base">{job.about.location}</span>
            </div>
          </div>
          <div className="text-textPrimary font-normal font-base text-justify mr-2">
            {job.description}
          </div>
          <div className="flex mt-8 ">
            <div className="border-r border-r-textSecondary mr-2">{<Inperson/>}</div>
            
            <div className="flex">
                <PrimaryTag categorie = {job.about.categories[0]}/>
                <SecondaryTag categorie = {job.about.categories[1]}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
