"use client"
import React from "react";
import { Inperson,Remote } from "./JobType";
import { PrimaryTag,SecondaryTag } from "./Tag";
import Link from "next/link";
import { JobPosting } from "@/app/components/Jobs";


  
  // Define the main interface for a job posting
  
  interface props{
    job: JobPosting;
    index:string
  }
const Card = ({job,index}:props) => {
    
  return (
    <Link href= {'/description/' + index}  passHref>
    <div className="border hover:bg-gray-200 border-gray-300 rounded-3xl   my-8 cursor-pointer  " 
    >
      <div className="flex   justify-center my-6">
        <img
          src={"/Images" + job.job.image}
          className="w-16 h-14  rounded-full "
          alt="Job logo"
        />

        <div className="m-0 ml-10 p-0">
          <div>
            <div className=" text-textPrimary text-xl font-semibold mb-2">
              {job.job.title}
            </div>
            <div className="text-textSecondary m-0 mb-2 p-0">
              <span className="font-normal font-base">{job.job.company}  </span>
              <span className="m-0 p-0 font-black">.</span>
              <span className="font-normal font-base"> {job.job.about.location}</span>
            </div>
          </div>
          <div className="text-textPrimary font-normal font-[16px] text-justify mr-4">
            {job.job.description}
          </div>
          <div className="flex mt-2 ">
            <div className="border-r border-r-textSecondary mr-2 flex items-center">{<Inperson/>}</div>
            
            <div className="flex m-0 ">
                <PrimaryTag categorie = {job.job.about.categories[0]}/>
                <SecondaryTag categorie = {job.job.about.categories[1]}  />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Card;
