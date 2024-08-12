"use client"
import Link from 'next/link';
import React from 'react'
import { Inperson, Remote } from './JobType';

import { FaBookmark } from "react-icons/fa";
import Data from "@/Types/BookmarkType";




interface props {
    data: Data | undefined;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    token: string;
}
/**
 * Represents a FavoriteCard component.
 * @param data - The data for the card.
 * @param setId - The function to set the ID.
 * @param token - The authorization token.
 */
const FavoriteCard = ({data,setCount,token}:props) => {
//   const [isBookmarked, setIsBookmarked] = React.useState(true);
const HandleBookmark = async () => {
    try {

      const id = data?.eventID as string;
        const res = await fetch(
          ` https://akil-backend.onrender.com/bookmarks/${data?.eventID}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
          console.log(res, "res");
        if (res.ok) {
          setCount(prev => prev+1);
        //   setIsBookmarked(false);
        } else {
          console.log("error");

        }
      
    } catch (error) {
      console.log(error);
    }
  };
    
  return (
    <div className='relative' data-testid= {"favorite-item"} >

<div
        className="px-5  absolute top-3 right-0   cursor-pointer"
        onClick={() => {
          HandleBookmark();
          // console.log("clicked");
        }}
      >
        <FaBookmark
        data-testid="bookmark-icon"
          className={
            "w-5 h-5  z-10  text-yellow-400 "
          }
          // onClick={HandleBookmark}
        />
        {/* <p>{isBookmarked}</p> */}
      </div>



        <Link href={`/description/${data?.eventID}`  } passHref>
            <div className='flex  felx-col gap-8 w-[550px] md:w-[800px]    rounded-lg border border-gray-500 shadow-md py-4 px-3'>
                <img src={data?.logoUrl}
                alt="logo image"
                className='w-16 h-16 rounded-full'
                />
                <div className='flex flex-col gap-3  w-[100%] '>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-lg font-semibold'>{data?.title}</h1>
                        <p className='text-sm font-light'>{data?.orgName} . {data?.location}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            {
                               data?.opType === 'inPerson' ? <Inperson/> : <Remote/>
                            }
                        </div>
                        <div className='flex flex-col items-end gap-2'>
                            <p className='text-xs font-light'> posted on :{ new Date(data?.datePosted ?? "").toLocaleDateString() }</p>
                            <p className='text-xs font-light'> bookmarked  on :{ new Date(data?.dateBookmarked ?? "").toLocaleDateString() }</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
)


    
  
}

export default FavoriteCard