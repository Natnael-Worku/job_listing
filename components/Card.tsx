"use client";
import React, { useEffect } from "react";
import { Inperson, Remote } from "./JobType";
import { PrimaryTag, SecondaryTag } from "./Tag";
import Link from "next/link";
import { JobPosting } from "@/Types/Jobs";
import { FaBookmark } from "react-icons/fa";

interface props {
  job: JobPosting;
  token: string;
}
/**
 * Renders a card component for a job listing.
 *
 * @param job - The job object containing information about the job listing.
 * @param token - The authentication token for the user.
 */
const Card = ({ job, token }: props) => {
  const [isBookmarked, setIsBookmarked] = React.useState(job.isBookmarked);
  useEffect(() => {
    setIsBookmarked(job.isBookmarked);
  }, [job]);

  const jobType = () => {
    if (job.opType === "inPerson") {
      return <Inperson />;
    }
    return <Remote />;
  };

  const HandleBookmark = async () => {
    try {
      if (isBookmarked) {
        const res = await fetch(
          ` https://akil-backend.onrender.com/bookmarks/${job.id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res, "res");
        if (res.ok) {
          setIsBookmarked(false);
        } else {
          console.log("error");
        }
      } else {
        const res = await fetch(
          ` https://akil-backend.onrender.com/bookmarks/${job.id}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.ok) {
          setIsBookmarked(true);
        } else {
          const message = await res.json();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div
        className="px-5  absolute top-6 right-0  cursor-pointer"
        onClick={() => {
          HandleBookmark();
        }}
      >
        <FaBookmark
          data-testid="bookmark-icon"
          className={
            "w-5 h-5  z-10 " +
            (isBookmarked ? "text-yellow-400" : "text-gray-300")
          }
        />
      </div>

      <Link href={"/description/" + job.id} passHref>
        <div className="border hover:bg-gray-200 border-gray-300 rounded-3xl   my-8 cursor-pointer  ">
          <div className="flex   justify-start my-6">
            <img
              src={job.logoUrl}
              className="w-16 h-14  rounded-full "
              alt="Job logo"
            />

            <div className="m-0 ml-10 p-0 w-[100%]">
              <div className="w-[100%]">
                <div>
                  <div className=" text-textPrimary text-xl font-semibold mb-2">
                    {job.title}
                  </div>
                </div>
                <div className="text-textSecondary m-0 mb-2 p-0">
                  <span className="font-normal font-base">{job.orgName} </span>
                  <span className="m-0 p-0 font-black">.</span>
                  <span className="font-normal font-base">
                    {" "}
                    {job.location.join(",")}
                  </span>
                </div>
              </div>
              <div className="text-textPrimary font-normal text-sm text-justify mr-4">
                {job.description}
              </div>
              <div className="flex mt-2 ">
                <div className="border-r border-r-textSecondary mr-2 flex items-center">
                  {jobType()}
                </div>

                <div className="flex m-0  flex-wrap">
                  {job.categories?.map((val, index) => {
                    if (index % 2) return <PrimaryTag categorie={val} />;

                    return <SecondaryTag categorie={val} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
