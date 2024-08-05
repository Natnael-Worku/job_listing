"use client"
import React from "react";
import { Inperson,Remote } from "./JobType";
import { PrimaryTag,SecondaryTag } from "./Tag";
import Link from "next/link";
import { JobPosting } from "@/Types/Jobs";


  
  // Define the main interface for a job posting
  
  interface props{
    job: JobPosting;
  }
const Card = ({job}:props) => {
  const jobType = ()=>{

    if (job.opType === "inPerson"){
      return <Inperson/>
    }
    return <Remote/>
  }

    
  return (
    <Link href= {'/description/' + job.id}  passHref>
    <div className="border hover:bg-gray-200 border-gray-300 rounded-3xl   my-8 cursor-pointer  " 
    >
      <div className="flex   justify-start my-6">
        <img
          src={job.logoUrl}
          className="w-16 h-14  rounded-full "
          alt="Job logo"
        />

        <div className="m-0 ml-10 p-0">
          <div>
            <div className=" text-textPrimary text-xl font-semibold mb-2">
              {job.title}
            </div>
            <div className="text-textSecondary m-0 mb-2 p-0">
              <span className="font-normal font-base">{job.orgName}  </span>
              <span className="m-0 p-0 font-black">.</span>
              <span className="font-normal font-base"> {
                
                
                // joinLocation()
                job.location.join(',')

              }</span>
            </div>
          </div>
          <div className="text-textPrimary font-normal text-sm text-justify mr-4">
            {job.description}
          </div>
          <div className="flex mt-2 ">
            <div className="border-r border-r-textSecondary mr-2 flex items-center">{
              jobType()
              
              }</div>
            
            <div className="flex m-0  flex-wrap">
            {
              job.categories?.map((val,index)=>{
                
                  if (index % 2)
                   return (<PrimaryTag categorie = {val}/>)

                  return (<SecondaryTag categorie = {val}/>)
                
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default Card;
