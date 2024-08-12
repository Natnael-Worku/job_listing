'use client';
import React,{useState,useEffect} from 'react'

import Description from '@/components/Description'
import {JobPosting} from '@/Types/Jobs';
import getSingleJob from '@/Service/SingleJob';
import { getSession, useSession } from 'next-auth/react';
import SessionType from '@/Types/SessionType';

interface props{
    params:{
        id:string;
    }
}


export default  function page  ({params:{id}}:props)  {
  const session = useSession() as unknown as SessionType | null;
  const [token, setToken] = useState<string>("");
  const [jobData, setJobData] = useState<JobPosting | null>();
  
  useEffect(() => {
    setToken(session?.data?.accessToken ?? "");

    const gettingsingleJOb = async() =>{
       const {data} = await getSingleJob(id,token)
      setJobData(data)
    }
    gettingsingleJOb()
    console.log(jobData, "data for the single job")
  },[session?.data?.accessToken]);
    

  return (
    <>
    <Description  data = {jobData}/>
    </>
  )
}
